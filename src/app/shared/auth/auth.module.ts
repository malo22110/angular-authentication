import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthManager } from './auth.manager';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    AuthManager,
    HttpClientModule
  ],
  declarations: [],
  exports: [
    AuthManager
  ]
})
export class AuthModule { }
