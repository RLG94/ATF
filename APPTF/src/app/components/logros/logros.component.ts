import { Component } from '@angular/core';

import { ConquistaComponent } from '../logros_categorias/conquista/conquista.component';
import { DesfaseComponent } from '../logros_categorias/desfase/desfase.component';
import { OlimpiadasComponent } from '../logros_categorias/olimpiadas/olimpiadas.component';
import { InspiracionComponent } from '../logros_categorias/inspiracion/inspiracion.component';

import { RouterModule,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [ConquistaComponent , DesfaseComponent, InspiracionComponent, OlimpiadasComponent,RouterModule,RouterOutlet],
  templateUrl: './logros.component.html',
  styleUrl: './logros.component.scss'
})
export class LogrosComponent {

}
