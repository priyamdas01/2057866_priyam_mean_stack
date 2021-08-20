import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfMcqComponent } from './mdf-mcq.component';

describe('MdfMcqComponent', () => {
  let component: MdfMcqComponent;
  let fixture: ComponentFixture<MdfMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdfMcqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
