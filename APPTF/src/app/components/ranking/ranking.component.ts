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
  posicion?: number | null; 
  imagen?: string; // La propiedad es opcional, indicada por el signo '?'
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
    { id: '3', nombre: 'Adrian Martínez', puntis: 1, ganador: 0, posicion: null, imagen: "https://imgur.com/iGHvV9L.jpeg" },
    { id: '25', nombre: 'Aitor Nuñez', puntis: 1, ganador: 0, posicion: null, imagen: "https://i.imgur.com/b9OHLEm.jpeg" },
    { id: '16', nombre: 'Alejandra Lai', puntis: 0, ganador: 0, posicion: null, imagen: "https://imgur.com/eQjiSrv.jpeg" },
    { id: '37', nombre: 'Alejandra Mangano', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/UV3B3eI.jpeg" },
    { id: '42', nombre: 'Alejandro Ces', puntis: 1, ganador: 0, posicion: null, imagen: "https://imgur.com/N65lQWi.jpeg" },
    { id: '41', nombre: 'Alejandro Fraga', puntis: 1, ganador: 0, posicion: null, imagen: "https://imgur.com/10ZfN8x.jpeg" },
    { id: '7', nombre: 'Alvaro Relojero', puntis:0, ganador: 0, posicion: null, imagen: "https://img.freepik.com/fotos-premium/personaje-dibujos-animados-sombrerero-loco-gafas-vapor-sombrero-generativo-ai_974533-60607.jpg" },
    { id: '26', nombre: 'Alvaro Verde', puntis: 1, ganador: 0, posicion: null, imagen: "https://i.imgur.com/mMEBKcM.jpeg" },
    { id: '8', nombre: 'Ana Esfenoides', puntis: 1, ganador: 0, posicion: null, imagen: "https://i.imgur.com/8YWExKM.jpeg" },
    { id: '2', nombre: 'Andoni Álvarez', puntis: 0, ganador: 0, posicion: null, imagen: "https://avatars.githubusercontent.com/u/153908128?v=4"},
    { id: '39', nombre: 'Andrea Nuñez', puntis: 0, ganador: 0, posicion: null, imagen: "https://imgur.com/IpWUcqC.jpeg" },
    { id: '27', nombre: 'Andrew', puntis: 1, ganador: 0, posicion: null, imagen: "https://i.imgur.com/kIGKlZK.jpeg" },
    { id: '9', nombre: 'Bea Vazquez', puntis: 1, ganador: 0, posicion: null, imagen: "https://i.imgur.com/kzHs3iO.jpeg" },
    { id: '10', nombre: 'Breo da Sousa', puntis: 1, ganador: 0, posicion: null, imagen: "https://i.imgur.com/IvqMdu4.jpeg" },
    { id: '11', nombre: 'Carlos Nogueira', puntis: 0, ganador: 0, posicion: null, imagen: "https://imgur.com/YvwjqvG.jpeg" },
    { id: '28', nombre: 'Cora Diaz', puntis: 1, ganador: 0, posicion: null, imagen: "https://imgur.com/zoJjy5v.jpeg" },
    { id: '29', nombre: 'Cristina Casas', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/eQfFIe4.jpeg" },
    { id: '30', nombre: 'Deborah Forrester', puntis: 1, ganador: 0, posicion: null, imagen: "https://i.imgur.com/LP5Idr3.jpeg" },
    { id: '12', nombre: 'Don Facto', puntis: 1, ganador: 1, posicion: null, imagen: "https://imgur.com/njXo3mJ.jpeg" },
    { id: '31', nombre: 'Francisco Encabo', puntis: 1, ganador: 0, posicion: null, imagen: "https://i.imgur.com/LP5Idr3.jpeg" },
    { id: '13', nombre: 'Frank Díaz', puntis: 0, ganador: 0, posicion: null, imagen: "https://imgur.com/Zxott5t.jpeg" },
    { id: '14', nombre: 'Gojo Carracedo', puntis: 0, ganador: 0, posicion: null, imagen: "https://imgur.com/Dfdenvn.jpeg" },
    { id: '32', nombre: 'Isa Vázquez', puntis: 0, ganador: 0, posicion: null, imagen: "https://imgur.com/hperML2.jpeg" },
    { id: '34', nombre: 'Jack Ruan', puntis: 0, ganador: 0, posicion: null, imagen: "https://imgur.com/oYAwRY0.jpeg" },
    { id: '15', nombre: 'Javi Llinares', puntis: 1, ganador: 0, posicion: null, imagen: "https://media.licdn.com/dms/image/C4D03AQHoDPsk5BCx4A/profile-displayphoto-shrink_800_800/0/1663077274007?e=1721260800&v=beta&t=EFpBYLcsUE8dOJMqdmNi-mkQKPzznYYsgx0ECY0335Q" },
    { id: '17', nombre: 'Laura Lua', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/UBrQPAZ.jpeg" },
    { id: '38', nombre: 'Lidia Vilanova', puntis: 0, ganador: 0, posicion: null, imagen: "https://imgur.com/vYgEpQk.jpeg" },
    { id: '40', nombre: 'Maria Ubeda', puntis: 0, ganador: 0, posicion: null, imagen: "https://imgur.com/cOPjYLv.jpeg" },
    { id: '47', nombre: 'Maria Selgas', puntis: 1, ganador: 0, posicion: null, imagen: "https://imgur.com/pjWxyj2.jpeg" },
    { id: '19', nombre: 'Marta Cortízas', puntis: 0, ganador: 0, posicion: null, imagen: "https://media.licdn.com/dms/image/D4D03AQEcNubOb84q1Q/profile-displayphoto-shrink_200_200/0/1669409423435?e=1721260800&v=beta&t=GBq2LjiH50s23cKVK2lH-6weWXDaf093brDMlpHSHis" },
    { id: '20', nombre: 'Nacho Pena', puntis: 1, ganador: 0, posicion: null, imagen: "https://imgur.com/4uzrk2s.jpeg" },
    { id: '33', nombre: 'Nana del Hue', puntis: 1, ganador: 0, posicion: null, imagen: "https://imgur.com/ynrWbQd.jpeg" },
    { id: '21', nombre: 'Nirei Orange', puntis: 1, ganador: 0, posicion: null, imagen: "https://media.licdn.com/dms/image/C4D03AQEJwPpFpT9EPg/profile-displayphoto-shrink_200_200/0/1633338767202?e=1721260800&v=beta&t=Bq-0jQePmmeHCPMx4dcQgqEehGOcPPSGG0B0nr60R5M" },
    { id: '22', nombre: 'Pablo Vigo', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/HgwvTu8.jpeg" },
    { id: '23', nombre: 'Paloma Redondo', puntis: 0, ganador: 2, posicion: null, imagen: "https://imgur.com/kqbpMDo.jpeg" },
    { id: '36', nombre: 'Perfe López', puntis: 1, ganador: 0, posicion: null, imagen: "https://imgur.com/EKEmIVj.jpeg" },
    { id: '4', nombre: 'Rebeca Llacer', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/8pDnFRW.jpeg" },
    { id: '1', nombre: 'Roberto Lago', puntis: 0, ganador: 0, posicion: null, imagen: "https://avatars.githubusercontent.com/u/157411142?s=400&u=02bb909ddf275c039273a665b3ac1bae39e882e4&v=4" },
    { id: '35', nombre: 'Ruben GV', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/HgwvTu8.jpeg" },
    { id: '24', nombre: 'Sara Villamarín', puntis: 1, ganador: 1, posicion: null, imagen: "https://imgur.com/YhAM5KQ.jpeg" },
    { id: '6', nombre: 'Victor Castro', puntis: 1, ganador: 2, posicion: null, imagen: "https://imgur.com/0Ll40Sh.jpeg" },
    
    
  // { id: '43', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  // { id: '44', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  // { id: '45', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  // { id: '46', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  
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
        return { 'background-color': '#D4AF37','background-image':'linear-gradient(25deg, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.5) 45%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 78%, rgba(255, 255, 255, 0.6) 100%)',
        'background-size':'100% 100%'};
      case 2:
        return { 'background-color': '#C0C0C0','background-image':'linear-gradient(25deg, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.9) 80%, rgba(255, 255, 255, 0.6) 100%)',
        'background-size':'100% 100%'};
      case 3:
        return { 'background-color': '#762c28' ,'background-image':'linear-gradient(25deg, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 80%, rgba(255, 255, 255, 0.6) 90%)',
        'background-size':'100% 100%'};
      default:
        return {};
    }
    
  }
  
  textoBusqueda: string = '';
  usuarioEncontrado: any = [{}];
  mostrarTable:boolean = true;

  buscarUsuario() {
    if (this.textoBusqueda.length > 2) {
    this.usuarioEncontrado = this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    )
    this.mostrarTable = false;
    console.log(this.usuarioEncontrado);
  }
  else { this.textoBusqueda = "buscar concursante"}
    
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





