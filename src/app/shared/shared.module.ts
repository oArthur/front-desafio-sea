import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {MatButton} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButton,
  ]
})
export class SharedModule { }
