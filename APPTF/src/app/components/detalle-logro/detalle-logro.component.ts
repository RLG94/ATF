import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import logros from '../../data/logros.json';

export type Dificultad = 'facil' | 'medio' | 'dificil';
export type IndiceLogro = {
  categoria: 'conquista' | 'inspiracion' | 'olimpiadas' | 'desfase';
  dificultad: Dificultad;
  numero: number;
};

interface Logro {
  nombre: string;
  descripcion: string;
  imagen: string;
  requisitos: number[];
  obtenido: { nombre: string; fecha: string }[];
}

@Component({
  selector: 'app-detalle-logro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-logro.component.html',
  styleUrl: './detalle-logro.component.scss',
})
export class DetalleLogroComponent {
  @Input() indice: IndiceLogro | null = null;

  cerrar() {
    this.indice = null;
  }

  get mostrar() {
    return this.indice !== null;
  }

  get logro(): Logro | null {
    if (this.indice === null) return null;

    const { categoria, dificultad, numero } = this.indice;
    return logros[categoria][dificultad][numero];
  }

  logroObtenido() {
    return this.logro !== null && this.logro.obtenido.length > 0;
  }

  logroBloqueado() {
    const { categoria, dificultad } = this.indice!;
    if (dificultad === 'facil') return false;

    const numerosRequisitos = this.logro!.requisitos;
    const dificultadRequisitos = this.dificultadAnterior(dificultad);

    return !numerosRequisitos.every(
      (numero) =>
        logros[categoria][dificultadRequisitos][numero].obtenido.length > 0
    );
  }

  formatearFecha(fecha: string): string {
    return new Date(fecha).toLocaleDateString();
  }

  dificultadAnterior(dificultad: Dificultad) {
    if (dificultad === 'dificil') return 'medio';
    if (dificultad === 'medio') return 'facil';
    throw new Error('facil no tiene dificultad anterior');
  }
}
