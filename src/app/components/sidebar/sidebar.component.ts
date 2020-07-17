import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    rtlTitle:'Dashboard',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/user',
    title: 'Usuário',
    rtlTitle: 'Usuário',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/clientefisica',
    title: 'Pessoa Fisica',
    rtlTitle: 'Pessoa Fisica',
    icon: 'icon-satisfied',
    class: ''
  }
  ,
  {
    path: '/clientejuridica',
    title: ' Pessoa jurídica',
    rtlTitle: ' Pessoa jurídica',
    icon: 'icon-trophy',
    class: ''
  },
  {
    path: '/curso',
    title: 'Curso ',
    rtlTitle: ' Curso',
    icon: 'icon-map-big',
    class: ''
  },
  {
    path: '/recurso',
    title: 'Recurso ',
    rtlTitle: ' recurso',
    icon: 'icon-light-3',
    class: ''
  },
  {
    path: '/projeto',
    title: 'Projeto ',
    rtlTitle: ' Projeto',
    icon: 'icon-pin',
    class: ''
  },
  {
    path: '/tipo',
    title: 'Tipo ',
    rtlTitle: ' Tipo',
    icon: 'icon-atom',
    class: ''
  },
  {
    path: '/message',
    title: 'Mensagem ',
    rtlTitle: ' Mensagem',
    icon: 'icon-send',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
