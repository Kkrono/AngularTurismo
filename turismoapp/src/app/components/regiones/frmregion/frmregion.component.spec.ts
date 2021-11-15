/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrmregionComponent } from './frmregion.component';

describe('FrmregionComponent', () => {
  let component: FrmregionComponent;
  let fixture: ComponentFixture<FrmregionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmregionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
