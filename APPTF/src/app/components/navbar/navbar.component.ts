import { Component } from '@angular/core';
import { RankingComponent } from '../ranking/ranking.component';
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { CalendarioComponent } from '../calendario/calendario.component';
import { ReglamentoComponent } from '../reglamento/reglamento.component';
import { RouterModule,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RankingComponent,HomeComponent,ErrorComponent,ReglamentoComponent,CalendarioComponent,RouterModule,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
