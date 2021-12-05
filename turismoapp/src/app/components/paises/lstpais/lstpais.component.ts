
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { PaisesResponse } from 'src/app/models/paises-response';
import { PaisesService } from 'src/app/services/paises.service';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-lstpais',
  templateUrl: './lstpais.component.html',
  styleUrls: ['./lstpais.component.scss']
})
export class LstpaisComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  misGlobalEntidad: PaisesResponse[]=[];
  idPk:string="";
  estadoProceso:Number=-1;
  nombrePaisEditar:string="";
  txtEditar:string="";
  
  constructor(private globalServ:PaisesService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15
    };
    this.Load();
  }
  seleccionReg(id:string){
    this.idPk=id;
    $('#confirmacion').modal('show');
//    console.log(Number(id));
//    console.log(this.misGlobalEntidad[Number(id)].nombre_pais);
  }
  seleccionRegEditar(id:string, nombre:string){
    this.idPk=id;
    $('#formEditarPais').modal('show');
    //this.nombrePaisEditar=this.misGlobalEntidad[Number(id)].nombre_pais;
      //console.log(Number(id));
      //console.log(nombre);
      this.nombrePaisEditar=nombre;
  }

  async Load(){
    const result= await this.globalServ.listar();
    this.misGlobalEntidad=result;
    this.dtTrigger.next();
  }
  eliminarRegistro(){
    let jQueryInstance=this;
    this.globalServ.DeleteItemRecord(this.idPk).subscribe(result=>{
 
          this.estadoProceso=0;
      
    });
    setTimeout(function(){
      jQueryInstance.estadoProceso=-1;
      $('#confirmacion').modal('hide');
      jQueryInstance.rerender();
    },3000);
  }

  editarReg(){
    const id=this.idPk;
    let jQueryInstance=this;

    if (this.txtEditar==""){
      this.txtEditar=this.nombrePaisEditar;
    }
    //this.nombrePaisEditar=this.txtNombrePais.nativeElement.value;
    console.log(this.txtEditar);
    let info={
      nombre_pais:this.txtEditar
    }
    //this.globalServ.UpdateRecord("aaa",id).subscribe(result=>{
    this.globalServ.UpdateRecord(info,id).subscribe(result=>{
    this.estadoProceso=0;
    });
    setTimeout(function(){
      jQueryInstance.estadoProceso=-1;
      $('#formEditarPais').modal('hide');
      jQueryInstance.rerender();
    },2000);
  }



  rerender(): void {
    
    this.globalServ.listar().then(result=>{
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

}
