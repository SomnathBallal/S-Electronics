import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionsDetailsComponent } from './televisions-details.component';

describe('TelevisionsDetailsComponent', () => {
  let component: TelevisionsDetailsComponent;
  let fixture: ComponentFixture<TelevisionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevisionsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
