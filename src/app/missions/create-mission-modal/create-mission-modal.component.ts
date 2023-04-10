import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MissionStatus } from '../missions.model';
import { MissionsStore } from '../missions.store';

@Component({
  selector: 'app-create-mission-modal',
  templateUrl: './create-mission-modal.component.html',
  styleUrls: ['./create-mission-modal.component.scss'],
})
export class CreateMissionModalComponent {
  readonly viewModel$ = this.missionsStore.viewModel$;
  readonly form = new FormGroup({
    codename: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    startDate: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    status: new FormControl<MissionStatus>(MissionStatus.InProgress, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    budget: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private matDialogRef: MatDialogRef<unknown, unknown>,
    private missionsStore: MissionsStore,
    private router: Router
  ) {}

  closeModal(): void {
    this.matDialogRef.close();
  }

  backToDashboard(): void {
    this.router.navigate(['/']);
    this.closeModal();
  }

  saveMission(): void {
    this.missionsStore.saveMission(this.form.getRawValue());
  }
}
