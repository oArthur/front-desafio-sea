import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientsService} from "../../services/clients.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Client} from "../../model/client";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent implements OnInit{


  form!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private clientService: ClientsService,
              private _snackBar: MatSnackBar,
              private location: Location,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const client: Client = this.route.snapshot.data['client'];
    this.form = this.formBuilder.group({
      id: [client.id],
      nome: [client.nome, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)]],
      cpf: [client.cpf],
      endereco: [client.endereco],
      cep: [client.cep],
      telefone: [client.telefone],
      tipo: [client.tipo],
      email: [client.email]
    })

  }

  onSubmit(){
    this.clientService.save(this.form.value).subscribe(
      res => this.onSuccess(), error => this.onError()
    );
  }

  protected onCancel(){
    this.location.back()
  }

  private onError(){
    this._snackBar.open("Error ao salvar cliente",'',{duration: 5000});
  }
  private onSuccess(){
    this._snackBar.open("Cliente salvo com sucesso.",'',{duration: 5000});
    this.onCancel()

  }

}
