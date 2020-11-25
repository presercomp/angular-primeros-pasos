import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from '../history/history.component';
import { AddComponent } from '../add/add.component';
import { CancelComponent } from '../cancel/cancel.component';
import { ConfigComponent } from '../config/config.component';
import { DevicesComponent } from '../devices/devices.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
];

@NgModule({
  declarations: [
    DashboardComponent,
    HistoryComponent,
    AddComponent,
    CancelComponent,
    ConfigComponent,
    UserComponent,
    DevicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
