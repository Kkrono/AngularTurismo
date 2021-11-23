import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-frmpais',
  templateUrl: './frmpais.component.html',
  styleUrls: ['./frmpais.component.scss']
})
export class FrmpaisComponent implements OnInit {
  frmRegistro:FormGroup;
  estadoProceso:Number=-1;
  estadoProcesoEditar:Number=-1;
  idPk:Number=-1;
  validationGroup={
    nombre_pais : [
      {type:'required',message:'El campo nombre del pais es requerido'}
    ]
  }
  constructor(private fb:FormBuilder,private paisServ:PaisesService) { 
    this.frmRegistro=this.fb.group({
      nombre_pais: new FormControl('',Validators.compose([Validators.required]))
    })
  }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#frmdatareg').find('input, textarea, select').attr('disabled', 'disabled');
      $("#cancelOp").attr('disabled', 'disabled');
      $("#saveOp").attr('disabled', 'disabled');
      $("#editarOp").attr('disabled', 'disabled');
      $("#newOp").removeAttr('disabled');
    })
  }
  editarReg(){
    $("#newOp").attr('disabled', 'disabled');
    $("#cancelOp").removeAttr('disabled');
    $("#editarOp").removeAttr('disabled');
    // $("#eliminarOp").removeAttr('disabled');
    $("#saveOp").attr('disabled', 'disabled');
    $('#frmdatareg').find('input, textarea, select').removeAttr('disabled');
  }
  nuevoReg(){
    $("#newOp").attr('disabled', 'disabled');
    $("#cancelOp").removeAttr('disabled');
    $("#saveOp").removeAttr('disabled');
    $("#editarOp").attr('disabled', 'disabled');
    // $("#eliminarOp").attr('disabled', 'disabled');
    $('#frmdatareg').find('input, textarea, select').removeAttr('disabled');
    $( "#npais" ).focus();
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
    this.idPk=-1;
    this.InitFrm();
  }
  onSubmitData() {
    let jQueryInstance = this;
    if (this.frmRegistro.valid) {
      this.paisServ.InsertRecord(this.frmRegistro.value).subscribe(result=>{
        console.log(result.id_pais);
        this.idPk=result.id_pais;
        if(this.idPk>0)
        {
          this.estadoProceso=0;
        }

      });
      setTimeout(function(){
        jQueryInstance.estadoProceso=-1;
      },3000);
      this.editarReg();
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
  onEditData() {
    let jQueryInstance = this;
    if (this.frmRegistro.valid) {
      this.paisServ.UpdateRecord(this.frmRegistro.value,this.idPk).subscribe(result=>{
        if(this.idPk>0)
        {   
          this.estadoProcesoEditar=0;
        }
      });
      setTimeout(function(){
        jQueryInstance.estadoProcesoEditar=-1;
      },3000);
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
        nombre_pais  : ''
      }
    );
  }
}