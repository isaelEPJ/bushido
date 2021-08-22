import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenseiDetailPageComponent } from './sensei-detail-page.component';

describe('SenseiDetailPageComponent', () => {
  let component: SenseiDetailPageComponent;
  let fixture: ComponentFixture<SenseiDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenseiDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenseiDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
