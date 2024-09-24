import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedBooksComponent } from './rented-books.component';

describe('RentedBooksComponent', () => {
  let component: RentedBooksComponent;
  let fixture: ComponentFixture<RentedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentedBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
