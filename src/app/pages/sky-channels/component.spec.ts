import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyChannelsComponent } from './component';

describe('SkyChannelsComponent', () => {
  let component: SkyChannelsComponent;
  let fixture: ComponentFixture<SkyChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkyChannelsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
