import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenAppliancesDetailsComponent } from './kitchen-appliances-details.component';

describe('KitchenAppliancesDetailsComponent', () => {
  let component: KitchenAppliancesDetailsComponent;
  let fixture: ComponentFixture<KitchenAppliancesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenAppliancesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenAppliancesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
