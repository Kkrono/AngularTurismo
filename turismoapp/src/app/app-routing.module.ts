import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path: 'autenticacion',component:LoginComponent},
{path: '**',pathMatch:'full',redirectTo:'autenticacion'}//ruta que no existe se va a redireccionar a la ruta de autenticacion

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
