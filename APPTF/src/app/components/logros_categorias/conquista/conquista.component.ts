import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import logros from '../../../data/logros.json';
import {
  DetalleLogroComponent,
  Dificultad,
  IndiceLogro,
} from '../../detalle-logro/detalle-logro.component';
import { LogrosComponent } from '../../logros/logros.component';

interface Logro {
  nombre: string;
  descripcion: string;
  imagen: string;
  obtenido: { nombre: string; fecha: string }[];
  requisitos: number[];
}

@Component({
  selector: 'app-conquista',
  standalone: true,
  imports: [
    CommonModule,
    LogrosComponent,
    RouterModule,
    RouterOutlet,
    DetalleLogroComponent,
  ],
  templateUrl: './conquista.component.html',
  styleUrl: './conquista.component.scss',
})
export class ConquistaComponent {
  CATEGORIA = 'conquista' as const;
  indice: IndiceLogro | null = null;

  logros(dificultad: Dificultad): Logro[] {
    return logros[this.CATEGORIA][dificultad]!;
  }

  logroObtenido(dificultad: Dificultad, numero: number) {
    return this.logros(dificultad)[numero].obtenido.length > 0;
  }

  logroBloqueado(dificultad: Dificultad, numero: number) {
    if (dificultad === 'facil') return false;

    const numerosRequisitos = this.logros(dificultad)[numero].requisitos;
    const dificultadRequisitos = this.dificultadAnterior(dificultad);

    return !numerosRequisitos.every((numero) =>
      this.logroObtenido(dificultadRequisitos, numero)
    );
  }

  mostrarDetalle(dificultad: Dificultad, numero: number) {
    this.indice = { categoria: this.CATEGORIA, dificultad, numero };
  }

  dificultadAnterior(dificultad: Dificultad) {
    if (dificultad === 'dificil') return 'medio';
    if (dificultad === 'medio') return 'facil';
    throw new Error('facil no tiene dificultad anterior');
  }
}
