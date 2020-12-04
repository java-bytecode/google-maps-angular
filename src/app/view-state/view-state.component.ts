import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-state',
  templateUrl: './view-state.component.html',
  styleUrls: ['./view-state.component.css']
})
export class ViewStateComponent implements AfterViewInit {

  inputAddr = null

  predictionsString = null

  geocoder = new google.maps.Geocoder();

  defaultDropdownMessage = "Select the state"

  states = new Set()

  ngAfterViewInit() {
    
   }

   keyDownFunction(event) {
    if (event.keyCode === 13) { // Enter Key
      this.mapInitializer();
    }
  }

   mapInitializer() {
    const autocomplete = new google.maps.places.AutocompleteService();
    autocomplete.getPlacePredictions({input: this.inputAddr}, this.displaySuggestions);
  }

displaySuggestions = (
    predictions: google.maps.places.AutocompletePrediction[],
    status: google.maps.places.PlacesServiceStatus
  ) => {
    if (status != google.maps.places.PlacesServiceStatus.OK) {
      alert(status);
      return;
    }

    this.predictionsString = predictions

    for(var prediction of predictions){
        // console.log(prediction.place_id);
        this.geocodePlaceId(this.geocoder, prediction.place_id)
    }
  }

geocodePlaceId (
    geocoder: google.maps.Geocoder,
    placeID
  ) {
    geocoder.geocode({ placeId: placeID }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          for(var state of results[0].address_components){
            switch(state.types[0]){
              case 'administrative_area_level_1':     //  Note some countries don't have states
                  this.states.add(state['long_name'])
          }
          }
  
        }
      }
    
    });
  }

}
