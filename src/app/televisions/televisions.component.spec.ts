import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionsComponent } from './televisions.component';

describe('TelevisionsComponent', () => {
  let component: TelevisionsComponent;
  let fixture: ComponentFixture<TelevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
