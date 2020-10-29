import faker from 'faker';

export class User {
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
}
