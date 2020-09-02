import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactsService } from 'app/resources/services/contacts.service';
import { DialogService } from 'app/resources/services/dialog.service';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsDetailsComponent } from './pages/contacts-details.component';
import { ContactsListComponent } from './pages/contacts.list.component';
import { ContactSearchComponent } from './components/contact-search/contact-search.component';

@NgModule({
  declarations: [ContactsListComponent, ContactsDetailsComponent, ContactSearchComponent],
  exports: [ContactsListComponent, ContactsDetailsComponent, ContactSearchComponent],
  imports: [CommonModule, ContactsRoutingModule, RouterModule, FormsModule],
  providers: [ContactsService, DialogService],
})
export class ContactsModule {}
