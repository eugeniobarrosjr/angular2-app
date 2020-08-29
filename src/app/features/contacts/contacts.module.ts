import { NgModule } from '@angular/core';
import { ContactsListComponent } from './pages/contacts.list.component';

@NgModule({
  declarations: [ContactsListComponent],
  exports: [ContactsListComponent],
})
export class ContactsModule {}
