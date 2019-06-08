import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-segmentation',
  templateUrl: './report-segmentation.component.html',
  styleUrls: ['./report-segmentation.component.css']
})
export class ReportSegmentationComponent implements OnInit {

  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['Gold', 'Silver', 'Bronze', 'None'],
      datasets: [
        {
          data: [40, 100, 25, 45],
          backgroundColor: [
            "#DAA520",
            "#C0C0C0",
            "#cd7f32",
            "#ffffff"
          ],
          hoverBackgroundColor: [
            "#DAA520",
            "#C0C0C0",
            "#cd7f32",
            "#ffffff"
          ]
        }]
    };

    this.options = {
      legend: {
        position: 'bottom'
      }
    };
  }
  ngOnInit() {
  }

}
