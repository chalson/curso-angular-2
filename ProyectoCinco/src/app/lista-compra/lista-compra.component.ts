import { Component, OnInit } from '@angular/core';
import {ElementoCompraComponent} from '../elemento-compra/elemento-compra.component';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {

    miElementoCompra: ElementoCompraComponent;
listaCompra: Array<ElementoCompraComponent>;
  miElemento: string;
  nombre: string;

  constructor() { }

  ngOnInit() {
    this.listaCompra=[];
  }

  nuevo(){
    this.miElementoCompra=new ElementoCompraComponent();
    this.miElementoCompra.setTexto(this.nombre);
    this.listaCompra.push(this.miElementoCompra);
  }

  borrar(queElemento){
    this.listaCompra.splice(queElemento,1);
  }
}
