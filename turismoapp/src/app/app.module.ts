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
import { FrmpaisComponent } from './components/paises/frmpais/frmpais.component';
import { LstpaisComponent } from './components/paises/lstpais/lstpais.component';
import { FrmdepartamentoComponent } from './components/departamentos/frmdepartamento/frmdepartamento.component';
import { LstdepartamentoComponent } from './components/departamentos/lstdepartamento/lstdepartamento.component';
import { FrmregionComponent } from './components/regiones/frmregion/frmregion.component';
import { LstregionComponent } from './components/regiones/lstregion/lstregion.component';
import { FrmsitioComponent } from './components/sitios/frmsitio/frmsitio.component';
import { LstsitioComponent } from './components/sitios/lstsitio/lstsitio.component';
import { FrmcomidaComponent } from './components/comidas/frmcomida/frmcomida.component';
import { LstcomidaComponent } from './components/comidas/lstcomida/lstcomida.component';

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
    WelcomeComponent,
    FrmpaisComponent,
    LstpaisComponent,
    FrmdepartamentoComponent,
    LstdepartamentoComponent,
    FrmregionComponent,
    LstregionComponent,
    FrmsitioComponent,
    LstsitioComponent,
    FrmcomidaComponent,
    LstcomidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
