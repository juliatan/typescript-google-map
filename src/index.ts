import { User } from './User';
import { Company } from './Company';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

// Comes from the Google Maps script file in index.html. Can access as global var because we installed @types/googlemaps.
new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
