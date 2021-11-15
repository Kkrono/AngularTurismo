/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrmsitioComponent } from './frmsitio.component';

describe('FrmsitioComponent', () => {
  let component: FrmsitioComponent;
  let fixture: ComponentFixture<FrmsitioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmsitioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmsitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
