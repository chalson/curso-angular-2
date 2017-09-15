import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elemento-compra',
  templateUrl: './elemento-compra.component.html',
  styleUrls: ['./elemento-compra.component.css']
})
export class ElementoCompraComponent implements OnInit {
public texto: string;

  constructor() { }

  ngOnInit() {
  }

  setTexto(cadena: string){
    this.texto=cadena;
  }

}
