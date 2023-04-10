import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Address, AddressForm } from './addresses.model';
import { MatDialog } from '@angular/material/dialog';
import { AddressesService } from './addresses.service';
import { CreateAddressModalComponent } from './create-address-modal/create-address-modal.component';

interface State {
  loadState: 'idle' | 'loading' | 'loaded';
  saveSate: 'idle' | 'saved';
  addresses: Address[];
}

@Injectable({
  providedIn: 'root',
})
export class AddressesStore extends ComponentStore<State> {
  viewModel$ = this.select((state) => state);

  constructor(
    private addressesService: AddressesService,
    private matDialog: MatDialog
  ) {
    super({
      loadState: 'idle',
      saveSate: 'idle',
      addresses: [],
    });
  }

  loadAddresses(): void {
    this.patchState({
      loadState: 'loading',
    });
    this.addressesService.getAddresses().subscribe((addresses) => {
      this.patchState({
        loadState: 'loaded',
        addresses,
      });
    });
  }

  createAddress(form: AddressForm): void {
    this.addressesService.createAddress(form).subscribe((address) => {
      this.patchState({
        saveSate: 'saved',
        addresses: [address, ...this.get().addresses],
      });
    });
  }

  editAddress(id: number, form: AddressForm): void {
    this.addressesService.editAddress(id, form).subscribe((address) => {
      this.patchState({
        saveSate: 'saved',
        addresses: this.get().addresses.map((address) => {
          return address.id === id ? { id, ...form } : address;
        }),
      });
    });
  }

  deleteAddress(id: number): void {
    this.addressesService.deleteAddress(id).subscribe(() => {
      this.patchState({
        addresses: this.get().addresses.filter((address) => address.id !== id),
      });
    });
  }

  openCreateAddressModal(): void {
    this.matDialog
      .open(CreateAddressModalComponent)
      .afterClosed()
      .subscribe(() => {
        this.patchState({ saveSate: 'idle' });
      });
  }

  openEditAddressModal(id: number): void {
    const address = this.get().addresses.find((address) => address.id === id);

    this.matDialog
      .open(CreateAddressModalComponent, {
        data: {
          address,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.patchState({ saveSate: 'idle' });
      });
  }
}
