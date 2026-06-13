import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderComponent } from './pages/order/order.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'menu',
    component: MenuComponent
  },

  {
    path: 'orden',
    component: OrderComponent
  },

  {
    path: 'personal',
    component: PersonalComponent
  },

  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];