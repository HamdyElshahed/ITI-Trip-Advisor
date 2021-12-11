import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() lat!: number;
  @Input() lang!: number;
  apiLoaded: Observable<boolean>;

  center!: google.maps.LatLngLiteral
  zoom !: number;
  markerOptions!: google.maps.MarkerOptions;
  markerPositions!: google.maps.LatLngLiteral[];


  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyD9JjHmXSY0TVyYw4kTZZWWE7i7UXBaUQ8', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this.center = { lat: this.lat, lng: this.lang };
    this.zoom = 19;
    this.markerOptions = { draggable: false };
    this.markerPositions = [];
  }

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }
}
