import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input() private miPropiedad: string;
@Output() miEvento=new EventEmitter<string>();

 propiedadHijo='propiedad hijo';
  constructor() { }

  ngOnInit() {
  }

  miFuncion(){
    this.miEvento.emit(this.propiedadHijo)
  }

}
