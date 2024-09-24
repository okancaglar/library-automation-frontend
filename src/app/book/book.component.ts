import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { BookService } from '../../book-service.service';
import { GeneralNavbarComponent } from '../general-navbar/general-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { inject } from '@angular/core';
import { BookEditComponent } from '../book-edit/book-edit.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FooterComponent, GeneralNavbarComponent, RouterModule, FormsModule, NgFor, NgIf, BookEditComponent],
  templateUrl: './book.component.html',
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {

  searchTerm: string = '';
  bookService: any = inject(BookService);
  books?: Book[];

  constructor() {
  }

  ngOnInit(): void {
  
    if (this.books === undefined) this.bookService.getBooks().subscribe(
      (data: Book[]) => {
      this.bookService.books.set(data);
      this.books = this.bookService.books();
  });
  }

  searchBook(searchTerm: string): void 
  {
    let resultArray: any = [];

    for(let book of this.bookService.books())
    {
      if (book.name.includes(searchTerm))
      {
        resultArray.push(book);
      }
    }

    if(resultArray.length > 0)
    {
      this.books = resultArray;
    }

  }



}
