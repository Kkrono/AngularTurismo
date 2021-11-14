import { Component, OnInit } from '@angular/core';

const URL_SITIO:string = 'www.google.com';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  isAct:boolean = true;
  edad:number = 20;
  ageNac:number = 2007;
  nombre:string = 'Benito Camelo';
  mensaje:string = '';

  constructor() {
    this.mensaje=`Hola ${this.nombre} y tiene ${2021-this.ageNac} años de edad`;
    //this.mensaje = "Hola " + this.nombre + " y tiene " + (2021-this.ageNac) + " años de edad";
   }

  ngOnInit(): void {
    console.log(this.isAct);
    if(this.isAct){
      console.log(this.edad);
    }
  }

}
