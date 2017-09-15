import { Component, Output, Input, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnChanges {
@Input() private miPropiedad: string;
@Output() miEvento=new EventEmitter<string>();

 propiedadHijo='propiedad hijo';
  constructor() { }

  ngOnInit() {
    console.log("onInit...");
  }
  ngOnChanges() {
    console.log("onChanges...");
  }
  miFuncion(){
    this.miEvento.emit(this.propiedadHijo)
  }

}
