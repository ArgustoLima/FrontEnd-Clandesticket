import { Component, Input } from '@angular/core';
import { ReusoService } from 'src/app/service/reuso.service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent {

  constructor(public reuso: ReusoService) {}

}
