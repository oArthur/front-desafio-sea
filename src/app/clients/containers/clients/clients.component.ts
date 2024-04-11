import {Component, OnInit} from '@angular/core';
import {Client} from "../../model/client";
import {ClientsService} from "../../services/clients.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmationDialogComponent} from "../../components/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {

  clientes$!: Observable<Client[]>;

  constructor(private clientsService: ClientsService,
              public dialog: MatDialog,
              private router: Router,
              private route:ActivatedRoute,
              private _snackBar: MatSnackBar) {}

  ngOnInit() {
   this.refresh()
  }

  refresh(){
    this.clientes$ = this.clientsService.list().pipe(
      catchError(err => {
        this.onError('Error ao carregar')
        return of([])
      })
    );
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  onEdit(client: Client){
    this.router.navigate(['edit', client.id], {relativeTo: this.route});

  }
  onDelete(client: Client){

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: `Tem certeza que deseja deletar o cliente '${client.nome}'?`,
    });

    dialogRef.afterClosed().subscribe(result  => {

      if (result){
        this.clientsService.remove(client.id).subscribe(
          () => {
            this.refresh()
            this._snackBar.open("Cliente removido com sucesso.",'X',{
              duration: 5000, verticalPosition: 'top', horizontalPosition: 'center'});
          },
          () => this.onError('Erro ao deletar Curso.')
        )
      }
    });


  }
  onError(errorMsg:string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
