import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  hostname: string =
    'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';
  constructor(private http: HttpClient) {}
  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(this.hostname)
      .pipe(map((books) => books.items || []));
  }
}
