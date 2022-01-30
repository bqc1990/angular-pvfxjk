import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const books = createFeatureSelector<Array<Book>>('books');
