import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-report-map',
  templateUrl: './report-map.component.html',
  styleUrls: ['./report-map.component.css']
})
export class ReportMapComponent implements OnInit {
  options: any;

  overlays: any[];

  ngOnInit() {
    this.options = {
      center: { lat: 46.769109, lng: 23.588847 },
      zoom: 12
    };

    this.overlays = [
      new google.maps.Marker({ position: { lat: 46.769109, lng: 23.586689 }, title: "Your Location", animation: google.maps.Animation.DROP }),
      new google.maps.Circle({ center: new google.maps.LatLng(46.769109, 23.586689), fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1200 }),
      new google.maps.Circle({ center: new google.maps.LatLng(46.757585, 23.561198), fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
      new google.maps.Circle({ center: new google.maps.LatLng(46.759288, 23.578185), fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 500 }),
      new google.maps.Circle({ center: new google.maps.LatLng(46.783722, 23.603466), fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 500 }),

    ]
  }

}
