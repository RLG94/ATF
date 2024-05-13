import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule aquí

interface usuario {
  id: string;
  nombre: string;
  puntis: number;
  ganador: number;
  posicion?: number | null;  // La propiedad es opcional, indicada por el signo '?'
}

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'] 
})
export class RankingComponent implements OnInit {
  usuarios: usuario[] = [  // Usar la interfaz Usuario para asegurar la tipificación
  { id: '1', nombre: 'Roberto Lago', puntis: 10, ganador: 2, posicion: null },
  { id: '2', nombre: 'Andoni Alvarez', puntis: 7, ganador: 1, posicion: null },
  { id: '3', nombre: 'Adrian Martinez', puntis: 12, ganador: 0, posicion: null },
  { id: '4', nombre: 'Rebeca Llacer', puntis: 42, ganador: 0, posicion: null },
  { id: '5', nombre: 'Maria Cabrera', puntis: 2, ganador: 0, posicion: null }
  ];
  generarArray(num: number): any[] {
    return new Array(num);
  }

  ngOnInit() {
    this.ordenarPorPuntis();
  }
  
  constructor() {
    this.ordenarPorPuntis();
    this.ordenarPorNombre();

  }

  ordenarPorPuntis() {
    this.usuarios.sort((a, b) => b.puntis - a.puntis);
    this.usuarios.forEach((usuario, index) => {
      usuario.posicion = index + 1;
    });
  }
  ordenarPorNombre() {
    this.usuarios.sort((a, b) => {
      return a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' });
    });
  }
  getStyle(posicion: number) {
    switch(posicion) {
      case 1:
        return { 'background-color': 'goldenrod' };
      case 2:
        return { 'background-color': 'silver' };
      case 3:
        return { 'background-color': '#762c28' };
      default:
        return {};
    }
  }
  textoBusqueda: string = '';
  usuarioEncontrado: any = null;

  buscarUsuario() {
    this.usuarioEncontrado = this.usuarios.find(usuario =>
      usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  
    if (this.usuarioEncontrado) {
      console.log(this.usuarioEncontrado.nombre);
    } else {
      console.log('No se encontró ningún usuario');
    }
  }
  }





