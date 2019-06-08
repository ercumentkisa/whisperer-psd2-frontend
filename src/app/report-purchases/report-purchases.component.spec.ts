import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPurchasesComponent } from './report-purchases.component';

describe('ReportPurchasesComponent', () => {
  let component: ReportPurchasesComponent;
  let fixture: ComponentFixture<ReportPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
