import { User } from './User';

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
}
