import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard', 
        component: DashboardComponent,
        outlet: 'dashboard'
      },
      {
        path: 'user', 
        component: UserComponent,
        outlet: 'user'
      },
      {
        path: 'user/:id', 
        component: UserDetailComponent,
        outlet: 'user/id'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
