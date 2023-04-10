import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null);
  readonly isLoggedIn$: Observable<boolean> = this.user$.pipe(
    map((user) => user !== null)
  );

  constructor() {}

  isLoggedIn(): boolean {
    return this.user$.getValue() !== null;
  }

  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Observable<void> {
    this.user$.next({
      username,
      password,
    });

    return of(undefined);
  }

  logout(): Observable<void> {
    this.user$.next(null);

    return of(undefined);
  }
}
