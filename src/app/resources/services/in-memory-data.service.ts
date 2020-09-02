import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from 'app/resources/models/contact.model';
import { Observable } from 'rxjs';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    const contacts = [
      new Contact(1, 'Mike', 'mike@gmail.com', '(55) 88888-9999'),
      new Contact(2, 'Jon', 'jon@gmail.com', '(55) 88888-1111'),
      new Contact(3, 'Peter', 'peter@gmail.com', '(55) 88888-2222'),
      new Contact(4, 'August', 'august@gmail.com', '(55) 88888-3333'),
      new Contact(5, 'Joan', 'joan@gmail.com', '(55) 88888-4444'),
    ];

    return { contacts };
  }
}
