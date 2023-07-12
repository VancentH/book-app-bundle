import {
  addBookSuccess,
  loadBookListSuccess,
  updateBookAction,
  updateBookSuccess,
  deleteBookAction,
  deleteBookSuccess,
  addBookAction,
  loadBookListAction,
} from './books.actions';
import { createReducer, on } from '@ngrx/store';
import { Book } from '../../shared/models/book';

export interface BookState {
  books: Book[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: BookState = {
  books: [],
  error: '',
  status: 'pending',
};

export const booksReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new book to the books array
  on(addBookSuccess, (state, { book }) => ({
    ...state,
    status: <const>'success',
    books: [...state.books, book],
  })),
  // remove the book from the books array
  on(deleteBookSuccess, (state, { id }) => ({
    ...state,
    status: <const>'success',
    books: state.books.filter((book) => book.id !== id),
  })),
  // Trigger loading the books
  on(loadBookListAction, (state) => ({ ...state, status: <const>'loading' })),
  // Handle successfully loaded books
  on(loadBookListSuccess, (state, { books }) => ({
    ...state,
    status: <const>'success',
    books: books,
  })),
  // Handle successfully updated books
  on(updateBookSuccess, (state, { book }) => ({
    ...state,
    status: <const>'success',
    books: state.books.map((oldbook) => {
      return book.id === oldbook.id ? book : oldbook;
    }),
  }))
);
