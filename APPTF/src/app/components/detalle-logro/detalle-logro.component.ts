import { Component } from '@angular/core';
import logros from '../../data/logros.json';

export type IndiceLogro = {
  categoria: 'conquista' | 'inspiracion' | 'olimpiadas' | 'desfase';
  dificultad: 'facil' | 'medio' | 'dificil';
  numero: number;
};

@Component({
  selector: 'app-detalle-logro',
  standalone: true,
  imports: [],
  templateUrl: './detalle-logro.component.html',
  styleUrl: './detalle-logro.component.scss',
})
export class DetalleLogroComponent {
  indice: IndiceLogro | null = {
    categoria: 'conquista',
    dificultad: 'facil',
    numero: 0,
  };

  get logro() {
    if (this.indice === null) return null;

    const { categoria, dificultad, numero } = this.indice;
    return logros[categoria][dificultad][numero];
  }
}
