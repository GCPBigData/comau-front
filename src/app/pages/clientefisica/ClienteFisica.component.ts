import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteFisica } from './ClienteFisica';
import { ClienteFisicaService } from './ClienteFisica.service';
import {FormControl} from '@angular/forms';
import {map, tap} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

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

  staticAlertClosed  = false;
  staticAlertClosed1 = false;
  staticAlertClosed2 = false;
  staticAlertClosed3 = false;
  staticAlertClosed4 = false;
  staticAlertClosed5 = false;
  staticAlertClosed6 = false;
  staticAlertClosed7 = false;

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

  reloadData() {
    this.clientefisica$ = this.clienteFisicaService.getList();
  }

  onSearch = () => {
    let value = this.queryField.value.toUpperCase();
    // tslint:disable-next-line:no-conditional-assignment
    if (value && (value = value.trim()) !== '') {
      this.showSpinner = true;
      this.results$ = this.http
        .get(this.clienteFisicaService.clienteFisicaURLfindName + value)
        .pipe(
          tap((res: string) => res),
          map((res: string) => res)
        );
      this.showSpinner = false;
      this.showNotification(`bottom`, `left`);
    }
  };

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
