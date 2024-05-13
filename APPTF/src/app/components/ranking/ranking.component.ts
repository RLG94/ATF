import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule aquí
import { cloneDeep } from 'lodash';
import { TmplAstDeferredBlockPlaceholder } from '@angular/compiler';

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
  { id: '5', nombre: 'Maria Cabrera', puntis: 2, ganador: 0, posicion: null },
  { id: '4', nombre: 'Rebeca Llacer', puntis: 42, ganador: 0, posicion: null },
  { id: '5', nombre: 'Maria Pelona', puntis: 2, ganador: 0, posicion: null },
  
  ];
  // usuarioAnterior = [{}]; //Este sería el elemento que me gustaria utilizar para comparar las posiciones anteriores, pero creo que no va a ser posible porque solo funcionaria en cache.

  generarArray(num: number): any[] {
    return new Array(num);
  }

  //Al inicio de la web me genera esta funcion para ordenar la tabla por puntis
  ngOnInit() {
    this.ordenarPorPuntis();
    this.mostrarTabla();
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
  ordenarPorLogros() {
    this.usuarios.sort((a, b) => b.ganador - a.ganador);
  }
  mostrarTabla() {
    return true;
  }

  //Es la gama de estilos para la posicion que tienen.
  getStyle(posicion: number) {
    switch(posicion) {
      case 1:
        return { 'background-color': '#E3D500' };
      case 2:
        return { 'background-color': '#BEBEBE' };
      case 3:
        return { 'background-color': '#762c28' };
      default:
        return {};
    }
  }
  textoBusqueda: string = '';
  usuarioEncontrado: any = null;
  tablaUsuarios: boolean = true;

  buscarUsuario() {
    if (this.textoBusqueda.length > 2) {
    this.usuarioEncontrado = this.usuarios.find(usuario =>
      usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    )

    console.log(this.usuarioEncontrado);
  }
  return false;
    
    // if (this.usuarioEncontrado.length > 0) {
    //   // Imprimir todos los nombres encontrados para verificar el resultado
    //   console.log("Usuarios encontrados:");
    //   this.usuarioEncontrado.forEach(user => console.log(user.nombre));
    // } else {
    //   console.log('No se encontró ningún usuario');
    // }
  }
  limpiarFiltro() {
    this.usuarioEncontrado = null;
    this.textoBusqueda = "";
  }
}
  //Estos comandos se generaron para la actualizacion de la lista e intentar generar la comparación entre "anterior" y "actual", pero aun no ha sido posible


//   actualizarLista() {
//     this.usuarioAnterior = this.usuarios;
//     console.log(this.usuarioAnterior);
//   }

//   clonarObjetoConLodash() {
//     let usuarioAnterior = cloneDeep(this.usuarios);
//     console.log(usuarioAnterior);
//     console.log(this.usuarios);
//     return usuarioAnterior;
//   }
//   confirmarDiferencias() {
//     console.log(this.usuarios);
//     console.log(this.usuarioAnterior)
//   }

// 





