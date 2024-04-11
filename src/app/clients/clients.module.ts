import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './containers/clients/clients.component';
import {MatTableModule} from '@angular/material/table'
import {MatCardModule} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import { ClientFormComponent } from './containers/client-form/client-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import { ClientsListComponent } from './components/clients-list/clients-list.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientFormComponent,
    ClientsListComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbar,
    MatProgressSpinner,
    MatIcon,
    MatMiniFabButton,
    MatIconButton,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatFormFieldModule,
    MatButton,
    MatSelect,
    MatOption
  ]
})
export class ClientsModule { }
