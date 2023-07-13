import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { BookState } from './books.reducers';

export const selectBooks = (state: AppState) => state.books;
export const selectAllBooks = createSelector(
  selectBooks,
  (state: BookState) => state.books
);
