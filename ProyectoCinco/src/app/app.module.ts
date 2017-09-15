import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { ElementoCompraComponent } from './elemento-compra/elemento-compra.component';
import {FormsModule} from '@angular/forms';
import {MiServicioService} from './mi-servicio/mi-servicio.service'

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    ListaCompraComponent,
    ElementoCompraComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [MiServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
