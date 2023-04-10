import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Mission } from './missions.model';
import { MissionsService } from './missions.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateMissionModalComponent } from './create-mission-modal/create-mission-modal.component';

interface State {
  loadState: 'idle' | 'loading' | 'loaded';
  saveSate: 'idle' | 'saved';
  missions: Mission[];
}

@Injectable({
  providedIn: 'root',
})
export class MissionsStore extends ComponentStore<State> {
  viewModel$ = this.select((state) => state);

  constructor(
    private missionsService: MissionsService,
    private matDialog: MatDialog
  ) {
    super({
      loadState: 'idle',
      saveSate: 'idle',
      missions: [],
    });
  }

  loadMissions(): void {
    this.patchState({
      loadState: 'loading',
    });
    this.missionsService.getMissions().subscribe((missions) => {
      this.patchState({
        loadState: 'loaded',
        missions,
      });
    });
  }

  saveMission(form: Mission): void {
    this.missionsService.saveMission(form).subscribe((mission) => {
      this.patchState({
        saveSate: 'saved',
        missions: [mission, ...this.get().missions],
      });
    });
  }

  openCreateMissionModal(): void {
    this.matDialog
      .open(CreateMissionModalComponent)
      .afterClosed()
      .subscribe(() => {
        this.patchState({ saveSate: 'idle' });
      });
  }
}
