export interface AddressForm {
  addressType: string;
  addressName: string;
  zipCode: string;
  place: string;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
}

export interface Address extends AddressForm {
  id: number;
}
