import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Address } from '../addresses.model';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.scss'],
})
export class AddressTableComponent implements AfterViewInit {
  @Input()
  set addresses(value: Address[]) {
    this.dataSource.data = value;
  }

  @Output() deleteAddress = new EventEmitter<number>();
  @Output() editAddress = new EventEmitter<number>();

  readonly dataSource = new MatTableDataSource<Address>([]);
  readonly displayedColumns: string[] = ['address', 'type', 'data', 'more'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
