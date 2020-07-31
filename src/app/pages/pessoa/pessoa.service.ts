import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  public readonly pessoaURFlux10 = `${environment.pessoaURFlux10}`;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  getPessoas(): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.pessoaURFlux10);
  }
  getPessoa(): Observable<any> {
    return this.http.get(`${this.pessoaURFlux10}`);
  }
}
