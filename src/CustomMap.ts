// Instructions to every other class on how they can be an argument to 'addMarker' method
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // do not allow anyone to access this outside this class
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // google var comes from the Google Maps script file in index.html. Can access as global var because we installed @types/googlemaps.
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there',
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
