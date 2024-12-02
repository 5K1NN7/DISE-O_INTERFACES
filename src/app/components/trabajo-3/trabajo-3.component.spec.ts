import { ComponentFixture, TestBed } from '@angular/core/testing';

import { trabajo-3Component } from './trabajo-3.component';

describe('trabajo-3Component', () => {
  let component: trabajo-3Component;
  let fixture: ComponentFixture<trabajo-3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [trabajo-3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(trabajo-3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
