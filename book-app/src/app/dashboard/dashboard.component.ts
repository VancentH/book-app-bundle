import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  trackByFn(index: number, item: { id: string }) {
    return item.id;
  }
}
