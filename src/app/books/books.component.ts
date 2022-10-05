import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  selectedBook?: Book;

  constructor(private bookService: BookService) {}

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }
  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
};
