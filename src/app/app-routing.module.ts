import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { LoginPageComponent } from './Modules/auth/login-page/login-page.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { ValidationsComponent } from './Modules/auth/validations/validations.component';
import { MarcadoresViewComponent } from './Modules/favoritos/marcadores-view/marcadores-view.component';
import { HeadersComponent } from './Modules/home/headers/headers.component';
import { FooterComponent } from './Modules/home/footer/footer.component';
import { TrackListComponent } from './Modules/tracks/track-list/track-list.component';
import { HistoryMenuComponent } from './Modules/history/history-menu/history-menu.component';


const routes: Routes = [

  {
    path:'', //local host
    component:MycomponentComponent
  },
  {
    path:'autenticacion',
    component:LoginPageComponent
  },
  {
    path:'registro',
    component:RegisterComponent
  },
  {
    path:'validacion',
    component:ValidationsComponent
  }, 
  {
    path:'marcador',
    component:MarcadoresViewComponent
  },
  {
    path:'headers',
    component:HeadersComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'Lista',
    component:TrackListComponent
  },
  {
    path:'Historial',
    component:HistoryMenuComponent
  }, 
  {
    path:'**', //local host
    component:MycomponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
