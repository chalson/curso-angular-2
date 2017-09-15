import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Pant1Component } from './pant1/pant1.component';
import {routing} from './modulo-routing/modulo-routing-routing.module';
import { PpalComponent } from './ppal/ppal.component';

@NgModule({
  declarations: [
    AppComponent,
    Pant1Component,
    PpalComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
