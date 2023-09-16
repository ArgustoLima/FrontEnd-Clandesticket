import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { LoginRoutingModule } from '../pages/login/login-routing.module';



@NgModule({
  declarations: [
    HeaderLoginComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    HeaderLoginComponent,
    FooterComponent
  ]
})
export class SharedModule { }
