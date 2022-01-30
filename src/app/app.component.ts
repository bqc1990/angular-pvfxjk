import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { books } from './state/books.selectors';
import { BooksService } from './book-list/books.service';
import { retrievedBookList, addBook, removeBook } from './state/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books$ = this.store.select(books);
  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
