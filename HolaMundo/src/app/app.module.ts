import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ModuloComunModule} from './modulo-comun/modulo-comun.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModuloComunModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
