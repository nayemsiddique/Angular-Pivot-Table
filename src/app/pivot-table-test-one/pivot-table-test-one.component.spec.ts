/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PivotTableTestOneComponent } from './pivot-table-test-one.component';

describe('PivotTableTestOneComponent', () => {
  let component: PivotTableTestOneComponent;
  let fixture: ComponentFixture<PivotTableTestOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotTableTestOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotTableTestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
