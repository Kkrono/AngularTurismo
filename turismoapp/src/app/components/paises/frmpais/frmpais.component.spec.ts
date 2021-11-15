/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrmpaisComponent } from './frmpais.component';

describe('FrmpaisComponent', () => {
  let component: FrmpaisComponent;
  let fixture: ComponentFixture<FrmpaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmpaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
