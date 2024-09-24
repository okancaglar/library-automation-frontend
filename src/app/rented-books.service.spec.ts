import { TestBed } from '@angular/core/testing';

import { RentedBooksService } from './rented-books.service';

describe('RentedBooksService', () => {
  let service: RentedBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentedBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
