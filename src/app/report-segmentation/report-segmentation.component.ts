import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-segmentation',
  templateUrl: './report-segmentation.component.html',
  styleUrls: ['./report-segmentation.component.css']
})
export class ReportSegmentationComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }
  ngOnInit() {
  }

}
