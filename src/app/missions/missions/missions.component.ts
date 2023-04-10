import { Component } from '@angular/core';
import { MissionsStore } from '../missions.store';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss'],
})
export class MissionsComponent {
  readonly viewModel$ = this.store.viewModel$;

  constructor(private store: MissionsStore) {}

  loadMissions(): void {
    this.store.loadMissions();
  }

  openCreateMissionModal(): void {
    this.store.openCreateMissionModal();
  }
}
