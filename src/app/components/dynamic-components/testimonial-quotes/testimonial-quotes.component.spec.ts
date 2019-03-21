import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialQuotesComponent } from './testimonial-quotes.component';

describe('TestimonialQuotesComponent', () => {
  let component: TestimonialQuotesComponent;
  let fixture: ComponentFixture<TestimonialQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
