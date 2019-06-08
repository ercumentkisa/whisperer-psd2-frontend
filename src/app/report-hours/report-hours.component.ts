import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report-hours',
  templateUrl: './report-hours.component.html',
  styleUrls: ['./report-hours.component.css'],
})
export class ReportHoursComponent implements OnInit {

  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['0-4', '4-8', '8-12', '12-16', '16-18', '18-22', '22-24'],
      datasets: [
        {
          label: 'Male',
          data: [0, 3, 23, 43, 35, 59, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Female',
          data: [1, 5, 64, 57, 93, 76, 12],
          fill: false,
          borderColor: '#f44242'
        }
      ]
    }

    this.options = {
      legend: {
        position: 'bottom'
      }
    };
  }


  ngOnInit() {
  }

}
