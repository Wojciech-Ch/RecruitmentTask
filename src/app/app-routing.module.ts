import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from './core/is-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivateChild: [IsLoggedInGuard],
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'missions',
    loadChildren: () =>
      import('./missions/missions.module').then((m) => m.MissionsModule),
    canActivateChild: [IsLoggedInGuard],
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'addresses',
    loadChildren: () =>
      import('./addresses/addresses.module').then((m) => m.AddressesModule),
    canActivateChild: [IsLoggedInGuard],
    canActivate: [IsLoggedInGuard],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
