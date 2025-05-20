import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

import { RankingComponent } from './components/ranking/ranking.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ErrorComponent } from './components/error/error.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { HomeComponent } from './components/home/home.component';
import { PremiosComponent } from './components/premios/premios.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterModule, RankingComponent, CalendarioComponent, ErrorComponent, ReglamentoComponent, HomeComponent,PremiosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'APPTF';
}
