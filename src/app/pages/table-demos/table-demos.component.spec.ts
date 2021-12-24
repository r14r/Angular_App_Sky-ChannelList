import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemosComponent } from './component';

describe('TableDemosComponent', () => {
  let component: TableDemosComponent;
  let fixture: ComponentFixture<TableDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDemosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
