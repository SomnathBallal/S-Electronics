import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelthAndFitnessDetailsComponent } from './helth-and-fitness-details.component';

describe('HelthAndFitnessDetailsComponent', () => {
  let component: HelthAndFitnessDetailsComponent;
  let fixture: ComponentFixture<HelthAndFitnessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelthAndFitnessDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelthAndFitnessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
