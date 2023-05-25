import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackOverflowComponent } from './stack-overflow.component';

describe('StackOverflowComponent', () => {
  let component: StackOverflowComponent;
  let fixture: ComponentFixture<StackOverflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StackOverflowComponent]
    });
    fixture = TestBed.createComponent(StackOverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
