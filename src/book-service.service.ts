import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from './app/models/Book';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = "http://localhost:8080/lib-auto/api/book";

  books: any = signal<Book[]>([]);
  
  constructor(private http: HttpClient, private router: Router) {}

  getBooks(): Observable<Book[]> {
        
        return this.http.get<Book[]>(this.apiUrl + "/books");
  }

  getBook(id:number): Book | null
  {
    for( let book of this.books())
    {
        if (book.id === id)
            return book;
    }
    return null;
  }

  deleteBook(bookId: number): void
  {
    this.http.delete(this.apiUrl + "/delete/" + bookId)
    .subscribe({next: 
      response => {
      console.log("Delete request sent successfully:", response);
      this.deleteBookFromSignal(bookId);
      this.router.navigate(["/books"]);
    }, error: error => {
      console.error("Error sending delete request:", error);
    }});     
  }

  updateBook(book: Book): void
  {

    this.http.put(this.apiUrl + "/update", {
      id: book.id, 
      name: book.name,
      blurb: book.blurb,
      rentalPrice: book.rentalPrice,
      addingDate: book.addingDate,
      genres: book.genres,
      writer: book.writer
  }, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }).subscribe({next :
    (response) => {
      console.log('Update successful', response);
      this.updateBookFromSignal(book);  // Update the signal or perform further actions
      this.router.navigate(["/books"]);
    },
    error: error => {
      console.error('Error updating the book', error);  // Handle errors
    }
  });
}


  deleteBookFromSignal(id: number): void
  {

    this.books().forEach((book: Book, index:number) => {
    if (book.id === id) {
      console.log("item found");
      this.books().splice(index, 1);
    }
  });
    console.log(this.books());
  }

  updateBookFromSignal(updatedBook: Book): void
  {
    console.log(updatedBook.genres);
    this.books().forEach((book: Book, index:number) => {
      if (book.id === updatedBook.id) {
        book.name = updatedBook.name;
        book.genres = updatedBook.genres;
        book.blurb = updatedBook.blurb;
        book.rentalPrice = updatedBook.rentalPrice;
        book.writer = updatedBook.writer;
      }
    });
  }


  addBook(book: Book): void 
  {
    this.http.post(this.apiUrl + "/create", {
      id: book.id, 
      name: book.name,
      blurb: book.blurb,
      rentalPrice: book.rentalPrice,
      addingDate: book.addingDate,
      genres: book.genres,
      writer: book.writer
  }, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }).subscribe({next :
    (response) => {
      console.log('Add successful', response);
      this.books().push(book);
      this.router.navigate(["/books"]);
    },
    error: error => {
      console.error('Error updating the book', error);  // Handle errors
    }
  });
  }

}
