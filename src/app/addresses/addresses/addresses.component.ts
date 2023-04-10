import { Component } from '@angular/core';
import { AddressesStore } from '../addresses.store';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent {
  readonly viewModel$ = this.store.viewModel$;
  constructor(private store: AddressesStore) {}

  loadAddresses(): void {
    this.store.loadAddresses();
  }

  openCreateAddressModal(): void {
    this.store.openCreateAddressModal();
  }

  deleteAddress(id: number): void {
    this.store.deleteAddress(id);
  }

  editAddress(id: number): void {
    this.store.openEditAddressModal(id);
  }
}
