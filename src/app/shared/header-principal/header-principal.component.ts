import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.scss']
})
export class HeaderPrincipalComponent {

  constructor(
    private authService: AuthService
  ) {}

  public logout() {
    this.authService.logout();
  }

}
