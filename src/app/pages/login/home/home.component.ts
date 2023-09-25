import { Component } from '@angular/core';
import { ReusoService } from 'src/app/service/reuso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public reuso: ReusoService) {}

}
