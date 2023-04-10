import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsRoutingModule } from './missions-routing.module';
import { MissionsComponent } from './missions/missions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MissionsTableComponent } from './missions-table/missions-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateMissionModalComponent } from './create-mission-modal/create-mission-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    MissionsComponent,
    MissionsTableComponent,
    CreateMissionModalComponent,
  ],
  imports: [
    CommonModule,
    MissionsRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule,
    MatProgressBarModule,
    MatDatepickerModule,
  ],
})
export class MissionsModule {}
