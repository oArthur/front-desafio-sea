import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsComponent} from "./containers/clients/clients.component";
import {ClientFormComponent} from "./containers/client-form/client-form.component";
import {clientsResolver} from "./guards/clients.resolver";

const routes: Routes = [
  {path: '', component: ClientsComponent},
  {path: 'new', component: ClientFormComponent, resolve: {client: clientsResolver}},
  {path: 'edit/:id', component: ClientFormComponent, resolve: {client: clientsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
