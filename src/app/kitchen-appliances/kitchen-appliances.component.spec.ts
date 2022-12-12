import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenAppliancesComponent } from './kitchen-appliances.component';

describe('KitchenAppliancesComponent', () => {
  let component: KitchenAppliancesComponent;
  let fixture: ComponentFixture<KitchenAppliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenAppliancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
