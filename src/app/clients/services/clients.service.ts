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
    return this.http.get<Client[]>(this.API)
      .pipe(
        first()
        );
  }
}
