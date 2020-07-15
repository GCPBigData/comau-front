import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, delay, take, tap} from 'rxjs/operators';

import { ClienteFisica, RequestCreateClienteFisica} from './ClienteFisica';

@Injectable({
  providedIn: 'root'
})
export class ClienteFisicaService {

  public readonly clienteFisicaURLListarTodos = `${environment.clienteFlisicaURLListarTodos}`;
  public readonly clienteFisicaURLfindNome =    `${environment.clienteFlisicaURLfindNome}`;
  public readonly clienteFisicaURLfindId =      `${environment.clienteFlisicaURLfindId}`;
  public readonly clienteFisicaURLPut =         `${environment.clienteFlisicaURLPut}`;
  public readonly clienteFisicaURLInsert =      `${environment.clienteFlisicaURLInsert}`;
  public readonly clienteFisicaURLDelete =      `${environment.clienteFlisicaURLDelete}`;
  public readonly clienteFisicaURLpainel =      `${environment.clienteFlisicaURLpainel}`;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getClienteFisicaId(id: number): Observable<any> {
    return this.http.get(`${this.clienteFisicaURLfindId}${id}`);
  }

  getClienteFisicas(): Observable<ClienteFisica> {
    return this.http.get<ClienteFisica>(this.clienteFisicaURLListarTodos);
  }

  getClienteFisicasPainel(): Observable<ClienteFisica> {
    return this.http.get<ClienteFisica>(this.clienteFisicaURLpainel);
  }

  loadByID(id: string) {
    return this.http.get<ClienteFisica>(`${this.clienteFisicaURLfindId}${id}`).pipe(take(1));
  }

  createClienteFisica(request: RequestCreateClienteFisica): Observable<ClienteFisica> {
    return this.http.post<ClienteFisica>(this.clienteFisicaURLInsert, request);
  }

  private create(clientefisica) {
    return this.http.post(this.clienteFisicaURLInsert, clientefisica).pipe(take(1));
  }

  searchClienteFisicaName(nome: string) {
    return this.http.get<ClienteFisica[]>(this.clienteFisicaURLfindNome + nome)
      .pipe(
        delay(1000),
        tap(console.log),
        catchError((err, caught) => err)
      );
  }

  getClienteFisicaNome(nome: string): Observable<any> {
    return this.http.get(`${this.clienteFisicaURLfindNome}${nome}`);
  }

  getClienteFiltroFull(nome: string): Observable<any> {
    return this.http.get(`${this.clienteFisicaURLfindNome}${nome}`);
  }

  getClienteFisicaById(id: number): Observable<ClienteFisica> {
    const url = `${this.clienteFisicaURLfindId}${id}`;
    return this.http.get<ClienteFisica>(url).pipe(
      tap(_ => console.log(`getClienteFisica id=${id}`)),
      catchError(this.handleError<ClienteFisica>(`getClienteFisicaById id=${id}`))
    );
  }

  update(id, data) {
    return this.http.put(`${this.clienteFisicaURLPut}/${id}`, data);
  }

  updateClienteFisica(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.clienteFisicaURLPut}${id}`, value);
  }

  updateStatus(id, data) {
    return this.http.put(`${this.clienteFisicaURLPut}${id}`, data);
  }

  get(id) {
    return this.http.get(`${this.clienteFisicaURLfindId}/${id}`);
  }

  getList(): Observable<any> {
    return this.http.get(`${this.clienteFisicaURLListarTodos}`);
  }
}
