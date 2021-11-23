
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
  misPaises: PaisesResponse[]=[];
  idPk:Number=0;
  estadoProceso:Number=-1;

  constructor(private paisServ:PaisesService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.LoadPaises();
  }
  seleccionReg(id:Number){
    this.idPk=id;
    $('#confirmacion').modal('show');
  }
  async LoadPaises(){
    const result= await this.paisServ.listarPaises();
    this.misPaises=result;
    this.dtTrigger.next();
  }
  eliminarRegistro(){
    let jQueryInstance=this;
    this.paisServ.DeleteItemRecord(this.idPk).subscribe(result=>{
 
          this.estadoProceso=0;
      
    });
    setTimeout(function(){
      jQueryInstance.estadoProceso=-1;
      $('#confirmacion').modal('hide');
      jQueryInstance.rerender();
    },3000);
  }
  rerender(): void {
    
    this.paisServ.listarPaises().then(result=>{
      this.misPaises=result;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
        //this.LoadPaises();
      });
    });
  
  }

}
