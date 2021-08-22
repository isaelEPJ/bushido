import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenseiPageComponent } from './sensei-page.component';

describe('SenseiPageComponent', () => {
  let component: SenseiPageComponent;
  let fixture: ComponentFixture<SenseiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenseiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenseiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
