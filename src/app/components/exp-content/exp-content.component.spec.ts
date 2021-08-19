import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpContentComponent } from './exp-content.component';

describe('ExpContentComponent', () => {
  let component: ExpContentComponent;
  let fixture: ComponentFixture<ExpContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
