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
  selector: 'app-book-add',
  standalone: true,
  imports: [GeneralNavbarComponent, FooterComponent, FormsModule, NgIf, RouterModule],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent implements OnInit {

  book: Book = {id: 0, name: "", blurb:"", addingDate: "", rentalPrice:0, genres: [], writer: ""};
  genreList: string = "";


  constructor(private bookService: BookService, private route: ActivatedRoute, private location: Location, private router: Router){}
  
  ngOnInit(): void {
    
  }

  onSubmit(book:Book): void
  {
    book.genres = this.genreList.split(",");
    this.bookService.addBook(book);
    }




}
