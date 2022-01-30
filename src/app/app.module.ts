import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store/src';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { booksReducer } from './state/books.reducer';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer }),
  ],
  declarations: [AppComponent, BookListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
