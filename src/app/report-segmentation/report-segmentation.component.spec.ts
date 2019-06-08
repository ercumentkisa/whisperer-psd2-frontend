import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSegmentationComponent } from './report-segmentation.component';

describe('ReportSegmentationComponent', () => {
  let component: ReportSegmentationComponent;
  let fixture: ComponentFixture<ReportSegmentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSegmentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSegmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
