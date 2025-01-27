import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { AboutComponent } from './Componentes/about/about.component';

const routes: Routes = [
  {path:  'home',component:  HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'**', pathMatch:'full',redirectTo:'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
