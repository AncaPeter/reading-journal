import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { BOOKS, TrendingBooks } from './mock-books';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Observable<Book[]> {
    const books = of(BOOKS);
    this.messageService.add('BookService: fetched books');
    return books;
  }

  getTrendingBooks(): Observable<Book[]> {
    const trendingbooks = of(TrendingBooks);
    return trendingbooks;
  }
  constructor(private messageService: MessageService) { }
}
