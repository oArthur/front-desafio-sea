import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
