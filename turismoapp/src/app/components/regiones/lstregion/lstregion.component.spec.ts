/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LstregionComponent } from './lstregion.component';

describe('LstregionComponent', () => {
  let component: LstregionComponent;
  let fixture: ComponentFixture<LstregionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstregionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
