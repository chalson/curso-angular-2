import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public nombre: string;
  public idea: string;
  public aIdea: Array<string>;

  constructor() { }

  aniadir(){
    this.aIdea.push(this.idea);
  }

  aniadir2(elemento: string){
    this.aIdea.push(elemento);
  }

  ngOnInit() {
    this.aIdea=[];
  }

}
