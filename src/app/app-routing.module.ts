import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
   path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) }, 
{ path: 'login', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
   { path: 'makeline', loadChildren: () => import('./pages/make-line/make-line.module').then(m => m.MakeLineModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
