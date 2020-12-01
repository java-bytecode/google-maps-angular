import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;

  lat = 38.627003;
  lng = -90.199402;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  geocoder = new google.maps.Geocoder();

  address: String = null
  address1: String = null
  address2: String = null
  country: String = null

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };


  ngAfterViewInit() {
    this.mapInitializer();
   }

   mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    // const marker = new google.maps.Marker({
    //   position: this.coordinates,
    //   map: this.map,
    // });

    // marker.setMap(this.map);

    // OnClick Event Listener
    google.maps.event.addListener(this.map, "click", (event) => {
      console.log(event.latLng.toJSON().lat);
      console.log(event.latLng.toJSON().lng);
      this.geocodeLatLng(this.geocoder, this.map, event.latLng.toJSON().lat, event.latLng.toJSON().lng)
    });
   }

geocodeLatLng(
    geocoder: google.maps.Geocoder,
    map: google.maps.Map, latitude, longitude
  ) {
    
    const latlng = {
      lat: latitude,
      lng: longitude
    };
    geocoder.geocode(
      { location: latlng },
      (
        results: google.maps.GeocoderResult[],
        status: google.maps.GeocoderStatus
      ) => {
        if (status === "OK") {
          if (results[0]) {
            console.log(results[0]);
            this.address = results[0].formatted_address;
            this.address1 = results[0].formatted_address.split(",")[0]
            this.address2 = results[0].formatted_address.split(",")[1]
            this.country = results[0].formatted_address.split(",")[2]
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }

  //  marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });

  // onClickedEvent(event){
  //   console.log(event);
  //   // this.lat = event.coords.lat
  //   // this.lng = event.coords.lng
  // }

}
