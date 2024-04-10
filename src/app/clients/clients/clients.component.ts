import {Component, OnInit} from '@angular/core';
import {Client} from "../model/client";
import {ClientsService} from "../services/clients.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {

  clientes$!: Observable<Client[]>;
  displayedColumns = ['nome', 'cpf','telefone', 'endereco','actions']

  constructor(private clientsService: ClientsService,
              public dialog: MatDialog,
              private router: Router,
              private route:ActivatedRoute) {}

  ngOnInit() {
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

  onError(errorMsg:string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
