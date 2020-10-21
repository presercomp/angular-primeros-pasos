import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './views/layout/layout.module';
import { HistoryComponent } from './views/pages/history/history.component';
import { AddComponent } from './views/pages/add/add.component';
import { CancelComponent } from './views/pages/cancel/cancel.component';
import { ConfigComponent } from './views/pages/config/config.component';
import { DevicesComponent } from './views/pages/devices/devices.component';
import { UserComponent } from './views/pages/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    AddComponent,
    CancelComponent,
    ConfigComponent,
    DevicesComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
