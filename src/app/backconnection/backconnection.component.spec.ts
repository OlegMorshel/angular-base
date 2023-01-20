import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackconnectionComponent } from './backconnection.component';

describe('BackconnectionComponent', () => {
  let component: BackconnectionComponent;
  let fixture: ComponentFixture<BackconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackconnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
