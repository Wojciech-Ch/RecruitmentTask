import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressTableComponent } from './addresses-table/address-table.component';
import { CreateAddressModalComponent } from './create-address-modal/create-address-modal.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AddressesComponent,
    AddressTableComponent,
    CreateAddressModalComponent,
  ],
  imports: [
    AddressesRoutingModule,
    CommonModule,
    TranslateModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class AddressesModule {}
