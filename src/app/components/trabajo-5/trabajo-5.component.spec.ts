import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trabajo5Component } from './trabajo-5.component';

describe('Trabajo5Component', () => {
  let component: Trabajo5Component;
  let fixture: ComponentFixture<Trabajo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Trabajo5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trabajo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
