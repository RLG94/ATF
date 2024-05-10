import { Routes } from '@angular/router';

import { RankingComponent } from './components/ranking/ranking.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'ranking', component: RankingComponent },
{ path: 'calendario', component: CalendarioComponent },
{ path: 'reglamento', component: ReglamentoComponent },
{ path: '**', component: ErrorComponent }

];
