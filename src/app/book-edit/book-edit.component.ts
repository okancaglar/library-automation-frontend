import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralNavbarComponent } from '../general-navbar/general-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Book } from '../models/Book';
import { OnInit } from '@angular/core';
import { BookService } from '../../book-service.service';
import { NgIf } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [GeneralNavbarComponent, FooterComponent, FormsModule, NgIf, RouterModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent implements OnInit {

  book?: any;
  genreString?: any;

  constructor(private route: ActivatedRoute, private bookService: BookService, private location: Location,
    private router: Router
  ){}

  ngOnInit(): void 
  {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.book = this.bookService.getBook(id);
    this.genreString = this.book.genres.join(",");
  }

  deleteBook(): void
  {
    if(this.book !== null) this.bookService.deleteBook(Number(this.book.id));
    this.bookService.getBooks()
  }

  onSubmit(book: Book){
    book.genres = this.genreString.split(",");
    console.log(book.genres);
    this.bookService.updateBook(book);
  }

  goBack()
  {}
}
