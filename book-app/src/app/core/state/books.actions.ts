import { createAction, props } from '@ngrx/store';
import { Book } from '../../shared/models/book';

// CRUD operations
export const ADD_BOOK_ACTION = '[Book] add book';
export const ADD_BOOK_SUCCESS = '[Book] add book success';
export const UPDATE_BOOK_ACTION = '[Book] update book';
export const UPDATE_BOOK_SUCCESS = '[Book] update book success';
export const DELETE_BOOK_ACTION = '[Book] delete book';
export const DELETE_BOOK_SUCCESS = '[Book] delete book success';
export const LOAD_BOOK_ACTION = '[Book] load book';
export const LOAD_BOOK_SUCCESS = '[Book] load book success';

// CRUD actions
export const addBookAction = createAction(
  ADD_BOOK_ACTION,
  props<{ book: Book }>()
);
export const addBookSuccess = createAction(
  ADD_BOOK_SUCCESS,
  props<{ book: Book }>()
);

export const updateBookAction = createAction(
  UPDATE_BOOK_ACTION,
  props<{ book: Book }>()
);
export const updateBookSuccess = createAction(
  UPDATE_BOOK_SUCCESS,
  props<{ book: Book }>()
);

export const deleteBookAction = createAction(
  DELETE_BOOK_ACTION,
  props<{ id: string }>()
);
export const deleteBookSuccess = createAction(
  DELETE_BOOK_SUCCESS,
  props<{ id: string }>()
);

export const loadBookListAction = createAction(LOAD_BOOK_ACTION);
export const loadBookListSuccess = createAction(
  LOAD_BOOK_SUCCESS,
  props<{ books: Book[] }>()
);

export const dummyAction = createAction('[dummy action]');
