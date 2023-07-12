import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { loadBookListAction } from 'src/app/core/state/books.actions';
import { selectAllBooks } from 'src/app/core/state/books.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private store: Store<AppState>) {}

  books$ = this.store.select(selectAllBooks);

  ngOnInit() {
    this.store.dispatch(loadBookListAction());
  }
}
