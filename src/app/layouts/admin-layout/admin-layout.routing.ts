import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { MessageComponent } from '../../pages/message/message.component';
import { FileuploadComponent } from '../../pages/fileupload/fileupload.component';
import { PessoaComponent} from '../../pages/pessoa/pessoa.component';
import { PacienteComponent } from 'src/app/pages/paciente/paciente.component';
import { FuncionarioComponent } from 'src/app/pages/funcionario/funcionario.component';
import { IaComponent } from 'src/app/pages/ia/ia.component';
import { Covid19Component } from 'src/app/pages/covid19/covid19.component';
import { NovopacienteComponent } from 'src/app/pages/paciente/novopaciente/novopaciente.component';
import { NovofuncionarioComponent } from 'src/app/pages/funcionario/novofuncionario/novofuncionario.component';
import { ExameComponent } from 'src/app/pages/exame/exame.component';
import { NovoexameComponent } from 'src/app/pages/exame/novoexame/novoexame.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'user', component: UserComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'fileupload', component: FileuploadComponent },
  { path: 'message', component: MessageComponent },
  { path: 'pessoa', component: PessoaComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'novopaciente', component: NovopacienteComponent },
  { path: 'funcionario', component: FuncionarioComponent },
  { path: 'novofuncionario', component: NovofuncionarioComponent },
  { path: 'ia', component: IaComponent },
  { path: 'covid19', component: Covid19Component },
  { path: 'exame', component: ExameComponent },
  { path: 'novoexame', component: NovoexameComponent },
  // { path: "rtl", component: RtlComponent }
];
