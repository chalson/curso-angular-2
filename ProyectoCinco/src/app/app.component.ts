
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comunicación entre componentes';
  miTexto = '';
  muestraTexto(cadena: string){
    this.miTexto=cadena;
  }
}
