import faker from 'faker';
import { Mappable } from './CustomMap';

// Every User needs to satisfy Mappable interface - not necessary for us to add implements code, but helps us to debug
export class User implements Mappable {
  // First set up the type for this class
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  // Then initialise with these props
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // since Faker provides lat and long as a string
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  // Needed for Mappable interface
  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
