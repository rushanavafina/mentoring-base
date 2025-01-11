import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  }
];
