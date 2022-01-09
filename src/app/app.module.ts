import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ConsideracoesIniciaisComponent } from './consideracoes-iniciais/consideracoes-iniciais.component';
import { VisaoGeralComponent } from './visao-geral/visao-geral.component';
import { IniciarProcessoComponent } from './iniciar-processo/iniciar-processo.component';
import { HomeComponent } from './home/home.component';
import { TelaProcessoComponent } from './tela-processo/tela-processo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConsideracoesIniciaisComponent,
    VisaoGeralComponent,
    IniciarProcessoComponent,
    HomeComponent,
    TelaProcessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
