import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-segmentation',
  templateUrl: './report-segmentation.component.html',
  styleUrls: ['./report-segmentation.component.css']
})
export class ReportSegmentationComponent implements OnInit {

  data: any;
  options: any;
  genders: any[];
  selectedGender: any;
  ages: any[];
  selectedAge: any;

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
  }
  ngOnInit() {
  }

  onChangeGender(newGenderIndex) {
    this.selectedGender = this.genders[newGenderIndex].code;
    console.log("Selected Gender: " + this.selectedGender);
  }
  onChangeAge(newAgeIndex) {
    this.selectedAge = this.ages[newAgeIndex].code;
    console.log("Selected Age: " + this.selectedAge);
  }
}
