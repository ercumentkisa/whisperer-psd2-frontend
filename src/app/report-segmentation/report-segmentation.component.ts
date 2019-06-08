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
      labels: ['Gold', 'Silver', 'Bronze', 'None'],
      datasets: [
        {
          data: [40, 100, 25, 45],
          backgroundColor: [
            "#b49822",
            "#bbbbbb",
            "#e66d28",
            "#ffffff"
          ],
          hoverBackgroundColor: [
            "#b49822",
            "#bbbbbb",
            "#e66d28",
            "#ffffff"
          ]
        }]
    };
  }
  ngOnInit() {
  }

}
