import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './Componentes/buttons/buttons.component';
import { HomeComponent } from './page/home/home.component';
import { BotonesComponent } from './page/botones/botones.component';
import { CardsComponent } from './Componentes/cards/cards.component';
import { BtnAgregarComponent } from './Componentes/btn-agregar/btn-agregar.component';
import { TarjetasComponent } from './page/tarjetas/tarjetas.component';
import { PopUpsComponent } from './Componentes/pop-ups/pop-ups.component';
import 'materialize-css';
import { ModalComponent } from './page/modal/modal.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HomeComponent,
    BotonesComponent,
    BtnAgregarComponent,
    TarjetasComponent,
     CardsComponent,
     PopUpsComponent,
     ModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
