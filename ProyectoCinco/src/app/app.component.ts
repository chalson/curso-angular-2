
import { Component } from '@angular/core';
import {MiServicioService} from './mi-servicio/mi-servicio.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comunicación entre componentes';
  //miservicio: MiServicioService;
  miservicio=new MiServicioService();
  miTexto = this.miservicio.propiedadServicio;

  
  muestraTexto(cadena: string){
    this.miTexto='texto';
    
  }
}
