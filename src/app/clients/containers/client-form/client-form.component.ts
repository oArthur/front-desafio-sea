import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormArray, Validators} from "@angular/forms";
import {ClientsService} from "../../services/clients.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Client} from "../../model/client";
import {Telefone} from "../../model/telefone";
import {Email} from "../../model/email";

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
        Validators.maxLength(100),
        Validators.pattern(/^[a-zA-Z0-9\s]*$/)]],
      cpf: [client.cpf,[
        Validators.required]],
      endereco: [client.endereco ,[
        Validators.required]],
      cep: [client.cep ,[
        Validators.required]],
      telefones: this.formBuilder.array(this.obterTelefones(client)),
      emails: this.formBuilder.array(this.obterEmails(client))
    })

    console.log(this.form.value)
  }



  getTelefonesFormArray(){
    return (<UntypedFormArray>this.form.get('telefones'))?.controls
  }
  getEmailFormArray(){
    return (<UntypedFormArray>this.form.get('emails'))?.controls
  }

  private obterTelefones(client: Client){
    const telefones = []
    if (client?.telefones){
      client.telefones.forEach(telefone => telefones.push(this.addTelefone(telefone)))
    }else{
      telefones.push(this.addTelefone())
    }
    return telefones
  }

  addNewPhone(){
    const telefones = this.form.get("telefones") as UntypedFormArray

    telefones.push(this.addTelefone());
  }
  removePhone(index: number){
    const telefones = this.form.get("telefones") as UntypedFormArray

    telefones.removeAt(index);
  }
  addNewMail(){
    const emails = this.form.get("emails") as UntypedFormArray

    emails.push(this.addEmail());
  }
  removeMail(index: number){
    const emails = this.form.get("emails") as UntypedFormArray

    emails.removeAt(index);
  }

  private addTelefone(telefone: Telefone = {id: '', tipo: "", numero:""}){
    return this.formBuilder.group({
        id: [telefone.id],
        tipo: [telefone.tipo],
        numero: [telefone.numero]
    })
  }

  private obterEmails(client: Client){
    const emails = []
    if (client?.emails){
      client.emails.forEach(email => emails.push(this.addEmail(email)))
    }else{
      emails.push(this.addEmail())
    }
    return emails
  }

  private addEmail(email: Email = {id: '', email: ""}){
    return this.formBuilder.group({
        id: [email.id],
        email: [email.email],
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

  getMessageErro(fieldName:string){
    const field = this.form.get(fieldName);


    if (field?.hasError('required')){
      return 'Campo obrigatorio'
    }
    if (field?.hasError('minlength')){
      const requiredLength = field?.errors? field.errors['minlength']['requiredLength']: 3;

      return `Tamanho minimo de ${requiredLength} caracteres.`
    }
    if (field?.hasError('maxlength')){
      const requiredLength = field?.errors? field.errors['maxlength']['requiredLength']: 200;

      return `Tamanho maximo excedido de ${requiredLength} caracteres.`
    }
    return 'Campo invalido'
  }


}
