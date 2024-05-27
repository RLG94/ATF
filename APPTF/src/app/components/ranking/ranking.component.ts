import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule aquí
import { cloneDeep } from 'lodash';
import { TmplAstDeferredBlockPlaceholder } from '@angular/compiler';
import { ParticipantesService } from '../../participantes.service';
import { Usuario } from '../../usuario';
import { partition } from 'rxjs/operators';



@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public participantesService =  new ParticipantesService();
  public usuarios:Usuario[] = []; 
  // usuarioAnterior = [{}]; //Este sería el elemento que me gustaria utilizar para comparar las posiciones anteriores, pero creo que no va a ser posible porque solo funcionaria en cache.

  generarArray(num: number): any[] {
    return new Array(num);
  }

  //Al inicio {}de la web me genera esta funcion para ordenar la tabla por puntis
  ngOnInit() {
    this.usuarios = this.participantesService.getUsuarios();
    //this.ordenarPorNombre();
    //this.ordenarPorPuntis();
    //this.mostrarTabla();
  }

  constructor() {
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
    switch (posicion) {
      case 1:
        return {
          'background-color': '#D4AF37', 'background-image': 'linear-gradient(25deg, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.5) 45%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 78%, rgba(255, 255, 255, 0.6) 100%)',
          'background-size': '100% 100%'
        };
      case 2:
        return {
          'background-color': '#C0C0C0', 'background-image': 'linear-gradient(25deg, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.9) 80%, rgba(255, 255, 255, 0.6) 100%)',
          'background-size': '100% 100%'
        };
      case 3:
        return {
          'background-color': '#762c28', 'background-image': 'linear-gradient(25deg, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 80%, rgba(255, 255, 255, 0.6) 90%)',
          'background-size': '100% 100%'
        };
      default:
        return {};
    }

  }

  textoBusqueda: string = '';
  usuarioEncontrado: any = [{}];
  mostrarTable: boolean = true;

  buscarUsuario() {
    if (this.textoBusqueda.length > 2) {
      this.usuarioEncontrado = this.usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      )
      this.mostrarTable = false;
      console.log(this.usuarioEncontrado);
    }
    else { this.textoBusqueda = "buscar concursante" }

    // if (this.usuarioEncontrado.length > 0) {
    //   // Imprimir todos los nombres encontrados para verificar el resultado
    //   console.log("Usuarios encontrados:");
    //   this.usuarioEncontrado.forEach(user => console.log(user.nombre));
    // } else {
    //   console.log('No se encontró ningún usuario');
    // }
  }
  limpiarFiltro() {
    this.usuarioEncontrado = false;
    this.mostrarTable = true;
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





