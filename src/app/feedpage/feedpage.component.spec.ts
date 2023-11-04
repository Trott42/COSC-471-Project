import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedpageComponent } from './feedpage.component';

describe('FeedpageComponent', () => {
  let component: FeedpageComponent;
  let fixture: ComponentFixture<FeedpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedpageComponent]
    });
    fixture = TestBed.createComponent(FeedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
