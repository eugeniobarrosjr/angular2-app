import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactsService {
  private apiUrl = 'app/contacts';

  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getContacts(): Promise<Contact[]> {
    return (
      this.http
        .get<Contact[]>(this.apiUrl)
        .toPromise()
        .then((response) => response)
        // eslint-disable-next-line prefer-promise-reject-errors
        .catch((error: HttpErrorResponse) => Promise.reject(!(!error.message && !error)))
    );
  }

  create(contact: Contact): Promise<Contact> {
    return this.http
      .post<Contact>(this.apiUrl, contact, {
        headers: this.headers,
      })
      .toPromise()
      .then((response) => response);
  }

  update(contact: Contact): Promise<Contact> {
    return this.http
      .put<Promise<Contact>>(`${this.apiUrl}/${contact.id}`, contact)
      .toPromise()
      .then(() => contact);
  }

  delete(contact: Contact): Promise<Contact> {
    return this.http
      .delete<Promise<Contact>>(`${this.apiUrl}/${contact.id}`)
      .toPromise()
      .then(() => contact);
  }

  getContact(id: number): Promise<Contact> {
    return this.getContacts().then((contacts) => contacts.find((contact) => contact.id === id));
  }

  getContactsSlowly(): Promise<Contact[]> {
    return new Promise<Contact[]>((resolve, reject) => {
      setTimeout(resolve, 500);
    }).then(() => this.getContacts());
  }

  search(term: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/?name=${term}`);
  }
}
