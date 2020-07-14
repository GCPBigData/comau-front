import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import {ClienteFisicaComponent} from './pages/clientefisica/ClienteFisica.component';
import {ClienteJuridicaComponent} from './pages/clientejuridica/ClienteJuridica.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        SweetAlert2Module
    ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, ClienteFisicaComponent, ClienteJuridicaComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
