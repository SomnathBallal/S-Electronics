import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsDetailsComponent } from './laptops-details.component';

describe('LaptopsDetailsComponent', () => {
  let component: LaptopsDetailsComponent;
  let fixture: ComponentFixture<LaptopsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
