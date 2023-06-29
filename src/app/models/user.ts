interface Geo {
  lat: string;
  lng: string;
}
interface Address {
  street: string,
  city: string,
  zipcode: string,
  geo: Geo
}

interface Company {
  name : string;
  catchprase: string;
  bs: string;
}


export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public address: Address,
    public phone: string,
    public website: string,
    public company: Company,
    ) {

  }
}

