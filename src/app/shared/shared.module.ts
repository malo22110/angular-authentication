import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';

const MODULES =  [
  AuthModule,
  CommonModule
];


@NgModule({
  imports: [
    MODULES
  ],
  declarations: [],
  exports: [
    MODULES
  ]
})
export class SharedModule { }
