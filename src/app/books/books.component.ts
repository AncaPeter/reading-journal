import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  book: Book = {
    id: 1,
    name: 'Regatul spinilor si al trandafirilor'
  };

  constructor(private bookService: BookService) {}

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }
  ngOnInit(): void {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
};
