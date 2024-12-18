import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Grid1Component } from './components/trabajo/trabajo.component';
import { Grid2Component } from './components/trabajo-2/trabajo-2.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { CardsComponent } from './components/trabajo-3/trabajo-3.component';
import { Tarea4Component } from './components/tarea-4/tarea-4.component';
import { Trabajo4Component } from './components/trabajo-4/trabajo-4.component';

@NgModule({
  declarations: [
    AppComponent,
    Grid1Component,
    Grid2Component,
    CardsComponent,
    HomeComponent,
    Tarea4Component,
    Trabajo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule, 
    ButtonModule,
    ToolbarModule, 
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
