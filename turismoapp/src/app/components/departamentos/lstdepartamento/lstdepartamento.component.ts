import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DepartamentoResponse } from 'src/app/models/departamento-response';
import { PaisesResponse } from 'src/app/models/paises-response';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PaisesService } from 'src/app/services/paises.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-lstdepartamento',
  templateUrl: './lstdepartamento.component.html',
  styleUrls: ['./lstdepartamento.component.scss']
})
export class LstdepartamentoComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  misGlobalEntidad: DepartamentoResponse[]=[];
  misPaises:PaisesResponse[]=[];
  idPk:string="";
  estadoProceso:Number=-1;
  datoEditar:string="";
  txtEditar:string="";
  txtEditarPais:string="";
  idPaisSeleccionado:string="";
 
  validationMessage={
    nombre_dep:[
      {type:'required',message:'El nombre del departamento es requerido'}
    ],
    paises:[
      {type:'required',message:'Debe seleccionar un pais'}
    ]
  }

  constructor(private globalService:DepartamentoService,private paisSer:PaisesService) {
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15
    };
    this.InitFrm();
    this.Load();
  }
  seleccionReg(id:string){
    this.idPk=id;
    $('#confirmacion').modal('show');
  }

  seleccionRegEditar(id:string, nombre:string){
    this.idPk=id;
    $('#formEditar').modal('show');
    //this.nombrePaisEditar=this.misGlobalEntidad[Number(id)].nombre_pais;
      //console.log(Number(id));
      //console.log(nombre);
      this.datoEditar=nombre;
      this.ListaPaises();
  }

  async Load(){
    const result= await this.globalService.listar();
    this.misGlobalEntidad=result;
    this.dtTrigger.next();
  }
  eliminarRegistro(){
    let jQueryInstance=this;
    this.globalService.DeleteItemRecord(this.idPk).subscribe(result=>{
 
          this.estadoProceso=0;
      
    });
    setTimeout(function(){
      jQueryInstance.estadoProceso=-1;
      $('#confirmacion').modal('hide');
      jQueryInstance.rerender();
    },3000);
  }
  rerender(): void {
    
    this.globalService.listar().then(result=>{
        this.misGlobalEntidad=result;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
        //this.Load();
      });
    });
  
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.idPaisSeleccionado = this.txtEditarPais;
}
  editarReg(){
    const id=this.idPk;
    let jQueryInstance=this;

    //this.nombrePaisEditar=this.txtNombrePais.nativeElement.value;
    console.log(this.txtEditar);
    console.log(this.idPaisSeleccionado);

    let info={
      nombre_dep:this.txtEditar,
      pais:{
        id_pais:this.idPaisSeleccionado
      }  
    }
    //$('#formEditar').modal('hide');

    //this.globalServ.UpdateRecord("aaa",id).subscribe(result=>{

    this.globalService.UpdateRecord(info,id).subscribe(result=>{
    this.estadoProceso=0;
    });
    setTimeout(function(){
      jQueryInstance.estadoProceso=-1;
      $('#formEditar').modal('hide');
      jQueryInstance.rerender();
    },2000);
    
  }

  async ListaPaises(){
    const resultPaises= await this.paisSer.listar();
    this.misPaises=resultPaises;
    console.log(this.misPaises);
  }
  InitFrm()
  {/*
    this.frmRegistro.setValue(
      {
        nombre_dep:'',
        paises:''
      }
    );*/
  }

}
