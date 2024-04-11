import { Injectable } from '@angular/core';
import {Client} from "../model/client";
import {HttpClient} from "@angular/common/http";
import {delay, first} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly API = 'api/clients';

  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Client[]>(this.API);
  }

  save(client: Partial<Client>){
    if(client.id){
      return this.update(client)
    }
    return this.create(client)
  }

  private create(client: Partial<Client>){
    return this.http.post<Client>(this.API, client);
  }
  private update(client: Partial<Client>){
    return this.http.put<Client>(`${this.API}/${client.id}`, client);
  }

  remove(id: number){
    return this.http.delete(`${this.API}/${id}`);
  }
  loadById(id:string){
    return this.http.get<Client>(`${this.API}/${id}`);
  }
}
