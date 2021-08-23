import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsComponentsComponent } from './promotions-components.component';

describe('PromotionsComponentsComponent', () => {
  let component: PromotionsComponentsComponent;
  let fixture: ComponentFixture<PromotionsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
