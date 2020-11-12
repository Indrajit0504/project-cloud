import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarsComponent } from './create-cars.component';

describe('CreateCarsComponent', () => {
  let component: CreateCarsComponent;
  let fixture: ComponentFixture<CreateCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
