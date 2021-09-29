import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './page/botones/botones.component';
import { TarjetasComponent } from './page/tarjetas/tarjetas.component';
import { ModalComponent } from './page/modal/modal.component';



const routes: Routes = [
  { path: 'botones', component: BotonesComponent},
  { path: 'tarjetas', component: TarjetasComponent},
  { path: 'modal', component: ModalComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
