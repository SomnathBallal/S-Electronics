import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelthAndFitnessComponent } from './helth-and-fitness.component';

describe('HelthAndFitnessComponent', () => {
  let component: HelthAndFitnessComponent;
  let fixture: ComponentFixture<HelthAndFitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelthAndFitnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelthAndFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
