import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBComponent } from './component-b.component';

describe('ComponentBComponent', () => {
  let component: ComponentBComponent;
  let fixture: ComponentFixture<ComponentBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentBComponent]
    });
    fixture = TestBed.createComponent(ComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
