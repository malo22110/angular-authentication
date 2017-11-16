import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing-module';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthManager} from './shared/auth/auth.manager';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, HttpClientModule, HttpModule, FormsModule, AppRoutingModule],
  providers: [AuthManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
