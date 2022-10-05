import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  selectedBook?: Book;
  books: Book[] = [];  

  constructor(private bookService: BookService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
};
