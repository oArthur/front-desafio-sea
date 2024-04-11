import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Client} from "../../model/client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {

  constructor() {
  }

  @Input() clients: Client[] = []
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)
  @Output() delete = new EventEmitter(false)

  readonly displayedColumns = ['nome', 'cpf','telefone','tipo', 'endereco','actions']


  onAdd(){
    this.add.emit(true)
  }

  onEdit(client: Client){
    this.edit.emit(client)
  }

  onDelete(client: Client){
    this.delete.emit(client)
  }

}
