import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ADDRESSES } from './addresses.mock';
import { Address, AddressForm } from './addresses.model';

let id = 100;

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  getAddresses(): Observable<Address[]> {
    return of(ADDRESSES).pipe(delay(200));
  }

  createAddress(form: AddressForm): Observable<Address> {
    id = id + 1;

    return of({ ...form, id }).pipe(delay(200));
  }

  editAddress(id: number, form: AddressForm): Observable<Address> {
    return of({ ...form, id }).pipe(delay(200));
  }

  deleteAddress(id: number): Observable<void> {
    return of(undefined).pipe(delay(200));
  }
}
