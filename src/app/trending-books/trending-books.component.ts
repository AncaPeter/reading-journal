import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.scss']
})
export class TrendingBooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getTrendingBooks();
  }
  getTrendingBooks(): void {
    this.bookService.getTrendingBooks()
      .subscribe(books => this.books = books);
  }
}
