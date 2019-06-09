import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-purchases',
  templateUrl: './report-purchases.component.html',
  styleUrls: ['./report-purchases.component.css']
})
export class ReportPurchasesComponent implements OnInit {

  data: any;
  options: any;
  currencies: any[];
  selectedCurrency: any;
  genders: any[];
  selectedGender: any;
  ages: any[];
  selectedAge: any;
  creditDebit: any[];
  selectedCreditDebit: any;
  installments: any[];
  selectedInstallments: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Restaurant',
          backgroundColor: '#ffcf70',
          borderColor: '#ffcf70',
          data: [65, 59, 80, 81, 56, 55]
        },
        {
          label: 'Groceries',
          backgroundColor: '#9CCC65',
          borderColor: '#9CCC65',
          data: [28, 48, 40, 19, 86, 27]
        },
        {
          label: 'Shopping',
          backgroundColor: '#90d0f0',
          borderColor: '#90d0f0',
          data: [90, 32, 21, 44, 87, 60]
        },
        {
          label: 'Health',
          backgroundColor: '#da0b37',
          borderColor: '#da0b37',
          data: [12, 14, 18, 21, 5, 9]
        },
        {
          label: 'Transportation',
          backgroundColor: '#cbb4d6',
          borderColor: '#cbb4d6',
          data: [18, 18, 18, 18, 18, 18]
        },
        {
          label: 'Leisure',
          backgroundColor: '#b0b3b6',
          borderColor: '#b0b3b6',
          data: [18, 18, 18, 18, 18, 18]
        }
      ]
    }

    this.options = {
      legend: {
        position: 'bottom'
      }
    };

    this.currencies = [
      { name: 'Euros', code: 'EUR' }
    ];
    this.selectedCurrency = this.currencies[0];

    this.genders = [
      { name: 'All Genders', code: '' },
      { name: 'Female', code: 'F' },
      { name: 'Male', code: 'M' }
    ];
    this.selectedGender = this.genders[0];

    this.ages = [
      { name: 'All Ages', code: '18-120' },
      { name: '18-25', code: '18-25' },
      { name: '26-35', code: '26-35' },
      { name: '36-45', code: '36-45' },
      { name: '46-55', code: '46-55' },
      { name: '55 and above', code: '55-120' }
    ];
    this.selectedAge = this.ages[0];

    this.creditDebit = [
      { name: 'Credit & Debit', code: 'CD' },
      { name: 'Credit', code: 'C' },
      { name: 'Debit', code: 'D' },
    ];
    this.selectedCreditDebit = this.creditDebit[0];

    this.installments = [
      { name: 'Full Payments & Installments', code: 'PI' },
      { name: 'Full Payments', code: 'P' },
      { name: 'Installment', code: 'I' },
    ];
    this.selectedInstallments = this.installments[0];
  }

  ngOnInit() {
  }

}
