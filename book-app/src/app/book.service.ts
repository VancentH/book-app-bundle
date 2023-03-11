import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './model/book';
import { catchError, map, tap, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = `${environment.apiUrl}/api/books`;

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl)
      .pipe(
        tap(_ => console.log('fetch books')),
        catchError(this.handleError<Book[]>('getBooks', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

