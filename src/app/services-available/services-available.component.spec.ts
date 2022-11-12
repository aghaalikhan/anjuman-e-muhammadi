import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAvailableComponent } from './services-available.component';

describe('ServicesAvailableComponent', () => {
  let component: ServicesAvailableComponent;
  let fixture: ComponentFixture<ServicesAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
