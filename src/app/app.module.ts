import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import{HttpClient,HttpClientModule} from '@angular/common/http'
import { CheckService } from './check.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MiddleInterceptor } from './middle.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ChatpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  

  ],
  providers: [CheckService,{provide:HTTP_INTERCEPTORS,useClass:MiddleInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
