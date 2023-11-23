import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POEComponent } from './poe.component';

describe('POEComponent', () => {
  let component: POEComponent;
  let fixture: ComponentFixture<POEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [POEComponent]
    });
    fixture = TestBed.createComponent(POEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
