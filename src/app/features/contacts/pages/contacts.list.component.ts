import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/resources/models/contact.model';

import { ContactsService } from 'app/resources/services/contacts.service';
import { DialogService } from 'app/resources/services/dialog.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: 'contacts.list.component.html',
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [];

  currentTimout: ReturnType<typeof setTimeout>;

  contactRemoved = false;

  constructor(private contactsService: ContactsService, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.contactsService
      .getContactsSlowly()
      .then((contacts: Contact[]) => {
        this.contacts = contacts;
      })
      .catch((error) => console.error(error));
  }

  onDelete(contact: Contact): void {
    this.dialogService.confirm('Deseja deletar o contato?').then((canDelete: boolean) => {
      if (canDelete) {
        this.contactsService
          .delete(contact)
          .then(() => {
            this.contacts = this.contacts.filter(
              (filteredContact: Contact) => filteredContact.id !== contact.id,
            );
            this.contactRemoved = true;
          })
          .finally(() => {
            if (this.currentTimout) {
              clearTimeout(this.currentTimout);
            }
            this.currentTimout = setTimeout(() => {
              this.contactRemoved = false;
            }, 2000);
          });
      }
    });
  }
}
