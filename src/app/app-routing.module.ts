import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { BaseComponent } from './views/layout/base/base.component';
import { AddComponent } from './views/pages/add/add.component';
import { CancelComponent } from './views/pages/cancel/cancel.component';
import { ConfigComponent } from './views/pages/config/config.component';
import { DevicesComponent } from './views/pages/devices/devices.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { HistoryComponent } from './views/pages/history/history.component';
import { UserComponent } from './views/pages/user/user.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)},
  { path: '', component: BaseComponent, canActivate: [AuthGuard], children: [
    { path: 'dashboard', loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
    { path: 'history', component: HistoryComponent},
    { path: 'add', component: AddComponent},
    { path: 'cancel', component: CancelComponent},
    { path: 'config', component: ConfigComponent},
    { path: 'devices', component: DevicesComponent},
    { path: 'user', component: UserComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  ]},
  { path: 'error', component: ErrorPageComponent, data: { 'type': 404, 'title': 'Página no encontrada'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
