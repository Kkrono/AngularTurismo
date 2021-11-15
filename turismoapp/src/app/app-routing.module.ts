import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidasComponent } from './components/comidas/comidas.component';
import { FrmcomidaComponent } from './components/comidas/frmcomida/frmcomida.component';
import { LstcomidaComponent } from './components/comidas/lstcomida/lstcomida.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { FrmdepartamentoComponent } from './components/departamentos/frmdepartamento/frmdepartamento.component';
import { LstdepartamentoComponent } from './components/departamentos/lstdepartamento/lstdepartamento.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { FrmpaisComponent } from './components/paises/frmpais/frmpais.component';
import { LstpaisComponent } from './components/paises/lstpais/lstpais.component';
import { PaisesComponent } from './components/paises/paises.component';
import { FrmregionComponent } from './components/regiones/frmregion/frmregion.component';
import { LstregionComponent } from './components/regiones/lstregion/lstregion.component';
import { RegionesComponent } from './components/regiones/regiones.component';
import { FrmsitioComponent } from './components/sitios/frmsitio/frmsitio.component';
import { LstsitioComponent } from './components/sitios/lstsitio/lstsitio.component';
import { SitiosComponent } from './components/sitios/sitios.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
{path: 'autenticacion',component:LoginComponent},
{path: 'inicio',component:InicioComponent,
   children:[
     {path:'welcome',component:WelcomeComponent},   
     {path:'paises',component:PaisesComponent,
      children:[
        {path:'registropais',component:FrmpaisComponent},
        {path:'listapaises',component:LstpaisComponent},
        {path: '**',pathMatch:'full',redirectTo:'listapaises'}
      ]
     },
     {path:'departamentos',component:DepartamentosComponent,
     children:[
      {path:'registrodepartamento',component:FrmdepartamentoComponent},
      {path:'listadepartamentos',component:LstdepartamentoComponent},
      {path: '**',pathMatch:'full',redirectTo:'listadepartamentos'}
    ]
    },
     {path:'regiones',component:RegionesComponent,
     children:[
      {path:'registroregion',component:FrmregionComponent},
      {path:'listaregiones',component:LstregionComponent},
      {path: '**',pathMatch:'full',redirectTo:'listaregiones'}
    ]    
    },
     {path:'sitios',component:SitiosComponent,
     children:[
      {path:'registrositio',component:FrmsitioComponent},
      {path:'listasitios',component:LstsitioComponent},
      {path: '**',pathMatch:'full',redirectTo:'listasitios'}
    ]        
    },
     {path:'comidas',component:ComidasComponent,
     children:[
      {path:'registrocomida',component:FrmcomidaComponent},
      {path:'listacomidas',component:LstcomidaComponent},
      {path: '**',pathMatch:'full',redirectTo:'listacomidas'}
    ]        
    },
     {path: '**',pathMatch:'full',redirectTo:'welcome'}
   ]
  },
{path: '**',pathMatch:'full',redirectTo:'autenticacion'}//ruta que no existe se va a redireccionar a la ruta de autenticacion

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
