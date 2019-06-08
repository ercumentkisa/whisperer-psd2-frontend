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
      labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',],
      datasets: [
        {
          label: 'Male',
          data: [3, 12, 15, 14, 10, 8, 2, 10, 12, 14, 16, 29, 25, 32, 65, 60, 72, 69, 84, 31, 24, 21, 14, 12],
          fill: false,
          borderColor: '#1f2533'
        },
        {
          label: 'Female',
          data: [1, 3, 3, 3, 3, 0, 2, 8, 12, 23, 44, 12, 54, 65, 76, 45, 34, 36, 55, 34, 32, 20, 15, 10],
          fill: false,
          borderColor: '#98cc6a'
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
