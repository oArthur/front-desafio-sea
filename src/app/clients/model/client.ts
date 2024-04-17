import {Telefone} from "./telefone";
import {Email} from "./email";

export interface Client {
  id: number,
  nome: string,
  cpf: string,
  endereco:string,
  cep:string,
  telefones?: Telefone[];
  emails?: Email[];


}
