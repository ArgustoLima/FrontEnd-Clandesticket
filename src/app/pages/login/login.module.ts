import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    EntrarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  exports: [
    LoginRoutingModule
  ]
})
export class LoginModule { }
