import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
// import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { ServicioHttpService } from './servicios/servicio-http.service';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SecretariaComponent } from './secretaria/secretaria.component';
import { PaginainicioComponent } from './paginainicio/paginainicio.component';
import { GenerarreservaComponent } from './generarreserva/generarreserva.component';
import { MostrarcalendarioComponent } from './mostrarcalendario/mostrarcalendario.component';
import { DocenteComponent } from './docente/docente.component';
import { VerusuariosComponent } from './verusuarios/verusuarios.component';
import { EditarusuarioComponent } from './editarusuario/editarusuario.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FormularioComponent },

  {
    path: 'inicio', component: PaginainicioComponent,
    children: [
      { path: 'secretaria', component: SecretariaComponent },
      { path: 'docente', component: DocenteComponent },
      { path: 'calendario', component: MostrarcalendarioComponent },
      { path: 'verUsuarios', component: VerusuariosComponent },
      { path: 'editarUsuarios/:correo', component: EditarusuarioComponent }
    ]
  }

]
@NgModule({
  declarations: [
    AppComponent,
    // CalendarComponent,
    FormularioComponent,
    SecretariaComponent,
    PaginainicioComponent,
    GenerarreservaComponent,
    MostrarcalendarioComponent,
    DocenteComponent,
    VerusuariosComponent,
    EditarusuarioComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServicioHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
