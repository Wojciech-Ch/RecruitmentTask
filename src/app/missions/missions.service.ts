import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MISSIONS } from './missions.mock';
import { Mission } from './missions.model';

@Injectable({
  providedIn: 'root',
})
export class MissionsService {
  constructor() {}

  getMissions(): Observable<Mission[]> {
    return of(MISSIONS).pipe(delay(200));
  }

  saveMission(form: Mission): Observable<Mission> {
    return of(form).pipe(delay(200));
  }
}
