import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-segmentation',
  templateUrl: './report-segmentation.component.html',
  styleUrls: ['./report-segmentation.component.css']
})

export class ReportSegmentationComponent implements OnInit {

  configUrl = 'http://54.171.160.15:8080/report/segmentation';
  data: any;
  options: any;
  genders: any[];
  selectedGender: any;
  ages: any[];
  selectedAge: any;

  constructor(private http: HttpClient) {
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
    this.getData();
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
  getData() {
    this.http.get(this.configUrl).subscribe((res) => {
      var dataPoints = [res["Gold"], res["Silver"], res["Bronze"], res["None"]];
      console.log("Fetched segment data: " + JSON.stringify(dataPoints));

      this.data = {
        labels: ['Gold', 'Silver', 'Bronze', 'None'],
        datasets: [
          {
            data: dataPoints,
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
    });
  }
}
