import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsideracoesIniciaisComponent } from './consideracoes-iniciais/consideracoes-iniciais.component';
import { HomeComponent } from './home/home.component';
import { IniciarProcessoComponent } from './iniciar-processo/iniciar-processo.component';
import { TelaProcessoComponent } from './tela-processo/tela-processo.component';
import { VisaoGeralComponent } from './visao-geral/visao-geral.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consideracoes-iniciais', component: ConsideracoesIniciaisComponent },
  { path: 'visao-geral', component: VisaoGeralComponent },
  { path: 'iniciar-processo', component: IniciarProcessoComponent },
  { path: 'tela-processo', component: TelaProcessoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
