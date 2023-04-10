import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mission } from '../missions.model';

@Component({
  selector: 'app-missions-table',
  templateUrl: './missions-table.component.html',
  styleUrls: ['./missions-table.component.scss'],
})
export class MissionsTableComponent implements AfterViewInit {
  @Input()
  set missions(value: Mission[]) {
    this.dataSource.data = value;
  }

  readonly dataSource = new MatTableDataSource<Mission>([]);

  readonly displayedColumns: string[] = [
    'codename',
    'status',
    'startDate',
    'budget',
  ];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
