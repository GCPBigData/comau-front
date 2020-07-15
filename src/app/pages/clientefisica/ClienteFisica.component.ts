import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ClienteFisica } from './ClienteFisica';
import { ClienteFisicaService } from './ClienteFisica.service';
import {FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { tap, map, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-clientefisica',
  templateUrl: './clientefisica.component.html',
  styleUrls: ['./clientefisica.component.scss']
})
export class ClienteFisicaComponent implements OnInit {

  showSpinner = false;
  results$;
  responseClienteFisica: ClienteFisica;
  clientefisica$: Observable<ClienteFisica[]>;
  queryField = new FormControl();
  texto = '';

  readonly FIELDS = 'nome,cpf,email';
  resultSeachReative$:Observable<any>;
  readonly SEARCH_URL = 'http://191.252.204.57/api/v1/clientefisica/listaFiltroFull/';
  total: number;

  staticAlertClosed  = false;
  staticAlertClosed1 = false;
  staticAlertClosed2 = false;
  staticAlertClosed3 = false;
  staticAlertClosed4 = false;
  staticAlertClosed5 = false;
  staticAlertClosed6 = false;
  staticAlertClosed7 = false;

  public modalFireCondition = false;
  public isSwalVisible = false;

  mudaTermo() {
    this.texto = this.queryField.value;
  }
  constructor(
    private router: Router,
    private clienteFisicaService: ClienteFisicaService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.reloadData();

    /**************Filtro Reativo*************/

   /* this.resultSeachReative$ = this.queryField.valueChanges
      .pipe(
        map(value => value.trim()),
        filter(value => value.length > 1),
        debounceTime(200),
        distinctUntilChanged(),
        // tap(value => console.log(value)),
        switchMap(value => this.http.get(this.SEARCH_URL, {
          params: {
            search: value,
            fields: this.FIELDS
          }
        })),
        tap((res: any) => this.total = res.total),
        map((res: any) => res.results)
      );*/
  }

  reloadData() {
    this.clientefisica$ = this.clienteFisicaService.getList();
    this.showNotification(`bottom`, `left`);
    this.showSpinner = true;
    this.clienteFisicaService.getClienteFisicas().subscribe(
      results$ => this.responseClienteFisica = results$
    );
    if (this.results$ == null) {
      setTimeout(() => {
        this.showSpinner = false;
      }, 1000);
    }
  }

  onSearch = () => {
    let value = this.queryField.value.toUpperCase();
    // tslint:disable-next-line:no-conditional-assignment
    if (value && (value = value.trim()) !== '') {
      this.showSpinner = true;
      this.results$ = this.http
        .get(this.clienteFisicaService.clienteFisicaURLfindNome + value)
        .pipe(
          tap((res: string) => res),
          map((res: string) => res)
        );
      this.showSpinner = false;
      this.showNotification(`bottom`, `left`);
    }
  };

  /*onSearchReative = () => {
    const field = 'nome,cpf,email';
    let value = this.queryField.value;
    // tslint:disable-next-line:no-conditional-assignment
    if (value && (value = value.trim()) !== '') {
      const  params_ = {
        seach: value,
        fields: field
      };
      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);
      this.results$ = this.http
        .get(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => (this.total = res.total)),
          map((res: any) => res.results)
        );
    }
  }*/


  showNotification(from, align){

    const color = Math.floor((Math.random() * 5) + 1);

    switch(color){
      case 1:
        this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-info alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      case 2:
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      case 3:
        this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-warning alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      case 4:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      case 5:
        this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-primary alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      default:
        break;
    }
  }
}
