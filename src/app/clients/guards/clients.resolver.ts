import { ResolveFn } from '@angular/router';
import {ClientsService} from "../services/clients.service";
import {inject} from "@angular/core";
import {Observable, of} from "rxjs";
import {Client} from "../model/client";


export const clientsResolver: ResolveFn<Observable<Client>> =
  (route, state, service: ClientsService = inject(ClientsService)):Observable<Client> => {

    if (route.params && route.params['id']){
      return service.loadById(route.params['id']);
    }

  return of({id: 0, nome: '', cpf: '', endereco: '', cep: '', email: '', telefone: '', tipo: ''});
};
