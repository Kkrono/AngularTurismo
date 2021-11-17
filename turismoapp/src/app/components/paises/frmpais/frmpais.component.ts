import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-frmpais',
  templateUrl: './frmpais.component.html',
  styleUrls: ['./frmpais.component.scss']
})
export class FrmpaisComponent implements OnInit {
  frmRegistro: FormGroup;
  estadoProceso:Number=-1;
  estadoProcesoEditar:Number=-1;
  validationMessages = {
    nombre_pais:[
      {type:'required',message:'El nombre del pais es requerido'}
    ]
  };
  constructor(private fb:FormBuilder) { 
    this.frmRegistro = this.fb.group({
      nombre_pais:new FormControl('',Validators.compose([Validators.required]))
    });

  }

  ngOnInit() {
  }

}
