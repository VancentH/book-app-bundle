import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Book } from '../../shared/models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl: string = `${environment.apiUrl}/api/books`;

  // get book list
  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl);
  }

  // TODO: add this feature
  // get a single book
  // get(id: number): Observable<Book> {
  //   return this.httpClient.get<Book>(this.baseUrl)
  // }

  // create a new book
  create(book: Partial<Book>): Observable<Book> {
    const params = new HttpParams()
      .set('bookname', book.bookname || '')
      .set('author', book.author || '');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    return this.httpClient.post<Book>(this.baseUrl, params, httpOptions);
  }

  // update a book
  update(book: Partial<Book>): Observable<Number> {
    const params = new HttpParams()
      .set('bookname', book.bookname || '')
      .set('author', book.author || '')
      .set('id', book.id || '');
    return this.httpClient.put<Number>(this.baseUrl, {}, { params });
  }

  // remove a book
  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
