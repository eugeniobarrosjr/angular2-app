import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'app/resources/models/contact.model';
import { ContactsService } from 'app/resources/services/contacts.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.sass'],
})
export class ContactsDetailsComponent implements OnInit {
  contact: Contact;

  private isNew = true;

  constructor(
    private contactService: ContactsService,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.contact = new Contact(null, '', '', '');

    this.route.params.forEach((params) => {
      const id: number = +params.id;
      if (id) {
        this.isNew = false;
        this.contactService.getContact(id).then((contact: Contact) => {
          this.contact = contact;
        });
      }
    });
  }

  validateInput(isValid: boolean, isPristine: boolean): object {
    return {
      'form-control': true,
      'is-invalid': !isValid && !isPristine,
      'is-valid': isValid && !isPristine,
    };
  }

  hiddenNegativeFeedback(isValid: boolean, isPristine: boolean): boolean {
    return isValid || isPristine;
  }

  onSubmit(): void {
    let promise: Promise<Contact>;
    if (this.isNew) {
      promise = this.contactService.create(this.contact);
    }
    promise = this.contactService.update(this.contact);
    promise.then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
