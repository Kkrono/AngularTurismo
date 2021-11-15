import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ComidasComponent } from './components/comidas/comidas.component';
import { RegionesComponent } from './components/regiones/regiones.component';
import { SitiosComponent } from './components/sitios/sitios.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { PaisesComponent } from './components/paises/paises.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ComidasComponent,
    RegionesComponent,
    SitiosComponent,
    DepartamentosComponent,
    PaisesComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
