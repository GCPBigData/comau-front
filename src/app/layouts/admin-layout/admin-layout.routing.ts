import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { ClienteFisicaComponent } from '../../pages/clientefisica/ClienteFisica.component';
import { MessageComponent } from '../../pages/message/message.component';
import { FileuploadComponent } from '../../pages/fileupload/fileupload.component';
import {PessoaComponent} from '../../pages/pessoa/pessoa.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'user', component: UserComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'clientefisica', component: ClienteFisicaComponent },
  { path: 'fileupload', component: FileuploadComponent },
  { path: 'message', component: MessageComponent },
  { path: 'pessoa', component: PessoaComponent }
  // { path: "rtl", component: RtlComponent }
];
