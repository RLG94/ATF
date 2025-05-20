import { Routes } from '@angular/router';

import { RankingComponent } from './components/ranking/ranking.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ErrorComponent } from './components/error/error.component';
import { PremiosComponent } from './components/premios/premios.component';
import { LogrosComponent } from './components/logros/logros.component';

// Aqui los imports para los logros
import { ConquistaComponent } from './components/logros_categorias/conquista/conquista.component';
import { InspiracionComponent } from './components/logros_categorias/inspiracion/inspiracion.component';
import { DesfaseComponent } from './components/logros_categorias/desfase/desfase.component';
import { OlimpiadasComponent } from './components/logros_categorias/olimpiadas/olimpiadas.component';








export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'ranking', component: RankingComponent },
{ path: 'calendario', component: CalendarioComponent },
{ path: 'reglamento', component: ReglamentoComponent },
{ path: 'premios', component: PremiosComponent },
{ path: 'logros', component: LogrosComponent  },
{ path: 'logrosConquista', component: ConquistaComponent },
{ path: 'logrosOlimpiadas', component: OlimpiadasComponent },
{ path: 'logrosDesfase', component: DesfaseComponent },
{ path: 'logrosInspiracion', component: InspiracionComponent },

//Relevante dejar este "catch" de ultimo 
{ path: '**', component: ErrorComponent },





];
