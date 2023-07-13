import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { addBookAction } from 'src/app/core/state/books.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  bookname: string = '';
  author: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addBook(): void {
    if (!this.bookname) {
      alert('please enter a book name!');
      return;
    }
    if (!this.author) {
      alert('please enter a author!');
      return;
    }

    const book = {
      id: '',
      bookname: this.bookname,
      author: this.author,
    };
    this.store.dispatch(addBookAction({ book }));
    this.reset();
  }

  reset() {
    this.bookname = '';
    this.author = '';
  }
}
