import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidasComponent } from './components/comidas/comidas.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PaisesComponent } from './components/paises/paises.component';
import { RegionesComponent } from './components/regiones/regiones.component';
import { SitiosComponent } from './components/sitios/sitios.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
{path: 'autenticacion',component:LoginComponent},
{path: 'inicio',component:InicioComponent,
   children:[
     {path:'welcome',component:WelcomeComponent},   
     {path:'paises',component:PaisesComponent},
     {path:'departamentos',component:DepartamentosComponent},
     {path:'regiones',component:RegionesComponent},
     {path:'sitios',component:SitiosComponent},
     {path:'comidas',component:ComidasComponent},
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
