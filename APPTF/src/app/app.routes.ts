import { Routes } from '@angular/router';

import { RankingComponent } from './components/ranking/ranking.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ErrorComponent } from './components/error/error.component';
import { PremiosComponent } from './components/premios/premios.component';
import { LogrosComponent } from './components/logros/logros.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'ranking', component: RankingComponent },
{ path: 'calendario', component: CalendarioComponent },
{ path: 'reglamento', component: ReglamentoComponent },
{ path: 'premios', component: PremiosComponent },
{ path: 'logros', component: ErrorComponent },
{ path: '**', component: ErrorComponent }


];
