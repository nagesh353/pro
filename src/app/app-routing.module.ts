import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'login',component:DashboardComponent,canActivate:[AuthGuard]
  },
  {
    path:'chatapp',component:ChatpageComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
