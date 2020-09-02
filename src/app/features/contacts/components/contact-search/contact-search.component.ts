import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/resources/models/contact.model';
import { ContactsService } from 'app/resources/services/contacts.service';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.sass'],
})
export class ContactSearchComponent implements OnInit {
  private searchTerm: Subject<string> = new Subject<string>();

  contacts: Observable<Contact[]>;

  constructor(private service: ContactsService) {}

  ngOnInit(): void {}

  search(term: string): void {
    console.log(term);
  }
}
