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
import { ClienteFisicaComponent } from './pages/clientefisica/ClienteFisica.component';
import { ClienteJuridicaComponent } from './pages/clientejuridica/ClienteJuridica.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MessageComponent } from './pages/message/message.component';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { IaComponent } from './pages/ia/ia.component';
import { Covid19Component } from './pages/covid19/covid19.component';
import { NovopacienteComponent } from './pages/paciente/novopaciente/novopaciente.component';
import { NovofuncionarioComponent } from './pages/funcionario/novofuncionario/novofuncionario.component';

/*npm install ng2-pdf-viewer --save*/
@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        PdfViewerModule,
        ToastrModule.forRoot(),
        SweetAlert2Module

    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ClienteFisicaComponent,
    ClienteJuridicaComponent,
    MessageComponent,
    FileuploadComponent,
    PessoaComponent,
    FuncionarioComponent,
    PacienteComponent,
    IaComponent,
    Covid19Component,
    NovopacienteComponent,
    NovofuncionarioComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
