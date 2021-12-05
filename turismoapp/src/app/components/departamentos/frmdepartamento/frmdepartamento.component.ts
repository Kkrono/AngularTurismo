import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartamentoResponse } from 'src/app/models/departamento-response';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PaisesResponse } from 'src/app/models/paises-response';
import { PaisesService } from 'src/app/services/paises.service';
import { PaisesComponent } from 'src/app/components/paises/paises.component';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-frmdepartamento',
  templateUrl: './frmdepartamento.component.html',
  styleUrls: ['./frmdepartamento.component.scss']
})
export class FrmdepartamentoComponent implements OnInit {
  frmRegistro:FormGroup;
  estadoProceso:Number=-1;
  estadoProcesoEditar:Number=-1;
  misDepartamentos:DepartamentoResponse[]=[];
  misPaises:PaisesResponse[]=[];
  validationMessage={
    nombre_dep:[
      {type:'required',message:'El nombre del departamento es requerido'}
    ],
    paises:[
      {type:'required',message:'Debe seleccionar un pais'}
    ]
  }
  constructor(private fb:FormBuilder,private depServ:DepartamentoService,private paisSer:PaisesService) { 
    this.frmRegistro=this.fb.group({
      nombre_dep:new FormControl('',Validators.compose([Validators.required])),
      paises:new FormControl('',Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
    this.LoadRecords();
    $(document).ready(function() {
      $('#frmdatareg').find('input, textarea, select').attr('disabled', 'disabled');
      $("#cancelOp").attr('disabled', 'disabled');
      $("#saveOp").attr('disabled', 'disabled');
      $("#editarOp").attr('disabled', 'disabled');
      $("#newOp").removeAttr('disabled');
    });
  }
  nuevoReg(){
    $("#newOp").attr('disabled', 'disabled');
    $("#cancelOp").removeAttr('disabled');
    $("#saveOp").removeAttr('disabled');
    $("#editarOp").attr('disabled', 'disabled');
    // $("#eliminarOp").attr('disabled', 'disabled');
    $('#frmdatareg').find('input, textarea, select').removeAttr('disabled');
    $( "#id" ).focus();
    this.InitFrm();
  }
  editarReg(){
    $("#newOp").attr('disabled', 'disabled');
    $("#cancelOp").removeAttr('disabled');
    $("#editarOp").removeAttr('disabled');
    // $("#eliminarOp").removeAttr('disabled');
    $("#saveOp").attr('disabled', 'disabled');
    $('#frmdatareg').find('input, textarea, select').removeAttr('disabled');
  }
  cancelar(){
    $('#frmdatareg').find('input, textarea, select').attr('disabled', 'disabled');
    $("#cancelOp").attr('disabled', 'disabled');
    $("#saveOp").attr('disabled', 'disabled');
    $("#editarOp").attr('disabled', 'disabled');
    // $("#eliminarOp").attr('disabled', 'disabled');
    $("#newOp").removeAttr('disabled');
    this.estadoProceso=-1;
    this.estadoProcesoEditar=-1;
    //this.InitFrm();
  }
  async LoadRecords(){
    const result= await this.depServ.listar();
    this.misDepartamentos=result;
    const resultPaises= await this.paisSer.listar();
    this.misPaises=resultPaises;
    console.log(this.misPaises);
  }
  onSubmitPais() {
    let jQueryInstance = this;
    if (this.frmRegistro.valid) {
      let info={
        nombre_dep:this.frmRegistro.controls['nombre_dep'].value,
        pais:{
          id_pais:this.frmRegistro.controls['paises'].value
        }  
      }
      console.log(info);

      this.depServ.InsertRecord(info).subscribe((result: { data: { idAux: any; }; })=>{
            this.estadoProceso=0;
      });
      setTimeout(function(){
        jQueryInstance.estadoProceso=-1;
      },3000);
      this.cancelar();
      this.InitFrm();
    } else {
      Object.keys(this.frmRegistro.controls).forEach(field => {
        const control: any = this.frmRegistro.get(field);
        // handle if basic FormControl
        // tslint:disable-next-line:no-string-literal
        if (!control['controls']) {
          control.markAsTouched({ onlySelf: true });
        } else {
            // tslint:disable-next-line:no-string-literal
            const QFormArray = control['controls'];
            QFormArray.forEach((subcCtrlGp: { [x: string]: {}; get: (arg0: string) => any; }) => {
              // tslint:disable-next-line:no-string-literal
              Object.keys(subcCtrlGp['controls']).forEach(subField => {
                const nestedControl = subcCtrlGp.get(subField);
                nestedControl.markAsTouched({ onlySelf: true });
              });
            });
          }
      });
    }
    
  }
  InitFrm()
  {
    this.frmRegistro.setValue(
      {
        nombre_dep:'',
        paises:''
      }
    );
  }
}