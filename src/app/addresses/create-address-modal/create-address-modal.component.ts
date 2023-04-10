import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddressesStore } from '../addresses.store';
import { Router } from '@angular/router';
import { Address } from '../addresses.model';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-create-address-modal',
  templateUrl: './create-address-modal.component.html',
  styleUrls: ['./create-address-modal.component.scss'],
})
export class CreateAddressModalComponent implements OnInit {
  readonly viewModel$ = this.addressesStore.viewModel$;

  isSubmitting = false;

  progress = 0;

  readonly form = new FormGroup({
    addressType: new FormControl(this.data?.address?.addressType ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    addressName: new FormControl(this.data?.address?.addressName ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    zipCode: new FormControl(this.data?.address?.zipCode ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    place: new FormControl(this.data?.address?.place ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    street: new FormControl(this.data?.address?.street ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    buildingNumber: new FormControl(this.data?.address?.buildingNumber ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    apartmentNumber: new FormControl(
      this.data?.address?.apartmentNumber ?? '',
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    ),
  });

  isEdit = !!this.data?.address;

  constructor(
    private matDialogRef: MatDialogRef<unknown, unknown>,
    private addressesStore: AddressesStore,
    private router: Router,
    @Inject(MAT_DIALOG_DATA)
    public data: { address?: Address }
  ) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(startWith(this.form.value)).subscribe(() => {
      const validFields = Object.values(this.form.controls).filter(
        (control) => control.valid
      );
      this.progress =
        (validFields.length / Object.keys(this.form.controls).length) * 100;
    });
  }

  closeModal(): void {
    this.matDialogRef.close();
  }

  backToDashboard(): void {
    this.router.navigate(['/']);
    this.closeModal();
  }

  saveAddress(): void {
    const id = this.data?.address?.id;
    const isEdit = !!id;

    if (isEdit) {
      this.addressesStore.editAddress(id, this.form.getRawValue());
    } else {
      this.addressesStore.createAddress(this.form.getRawValue());
    }
  }
}
