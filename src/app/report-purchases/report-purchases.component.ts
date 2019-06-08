import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-purchases',
  templateUrl: './report-purchases.component.html',
  styleUrls: ['./report-purchases.component.css']
})
export class ReportPurchasesComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Restaurant',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55]
        },
        {
          label: 'Groceries',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27]
        }
      ]
    }
  }

  ngOnInit() {
  }

}
