import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DojoPageComponent } from './dojo-page.component';

describe('DojoPageComponent', () => {
  let component: DojoPageComponent;
  let fixture: ComponentFixture<DojoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DojoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DojoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
