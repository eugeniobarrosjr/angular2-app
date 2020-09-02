import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailsComponent } from './pages/contacts-details.component';
import { ContactsListComponent } from './pages/contacts.list.component';

const contactsRoutes: Routes = [
  {
    path: 'contact',
    component: ContactsListComponent,
  },
  {
    path: 'contact/save',
    component: ContactsDetailsComponent,
  },
  {
    path: 'contact/save/:id',
    component: ContactsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(contactsRoutes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
