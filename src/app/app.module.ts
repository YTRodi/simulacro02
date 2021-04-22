import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { FormActorComponent } from './components/form-actor/form-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaPaisesComponent,
    FormActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
