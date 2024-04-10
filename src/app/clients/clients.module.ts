import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';
import {MatTableModule} from '@angular/material/table'
import {MatCardModule} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import { ClientFormComponent } from './client-form/client-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";


@NgModule({
  declarations: [
    ClientsComponent,
    ClientFormComponent
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
    MatButton
  ]
})
export class ClientsModule { }
