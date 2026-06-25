import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule aquí

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
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  usuarios: usuario[] = [
    // Usar la interfaz Usuario para asegurar la tipificación
    {
      id: '3',
      nombre: 'Adrian Martínez (DÚO Proyecto Hombre)',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/iGHvV9L.jpeg',
    },
    {
      id: '25',
      nombre: 'Aitor Nuñez (DÚO CHAT TERRA)',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/b9OHLEm.jpeg',
    },
    {
      id: '16',
      nombre: 'Alejandra Lai (DÚO Las hermanas Lai)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/eQjiSrv.jpeg',
    },
    {
      id: '37',
      nombre: 'Alejandra Mangano (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/UV3B3eI.jpeg',
    },
    {
      id: '43',
      nombre: 'Alejandro Barba (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/Hg14P65.jpeg',
    },
    {
      id: '42',
      nombre: 'Alejandro Ces (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/N65lQWi.jpeg',
    },
    /* NO ACTIVO 2025
    {
      id: '41',
      nombre: 'Alejandro Fraga', 
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/10ZfN8x.jpeg',
    },*/

     /* NO ACTIVO 2025
    {
      id: '45',
      nombre: 'Alicia Relojero',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/m1EsTYR.jpeg',
    },*/

     /* NO ACTIVO 2025
    {
      id: '7',
      nombre: 'Alvaro Relojero',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen:
        'https://img.freepik.com/fotos-premium/personaje-dibujos-animados-sombrerero-loco-gafas-vapor-sombrero-generativo-ai_974533-60607.jpg',
    },*/
    {
      id: '26',
      nombre: 'Alvaro Verde (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/mMEBKcM.jpeg',
    },
    {
      id: '8',
      nombre: 'Ana Esfenoides (DÚO Speed Y Friends)',
      puntis: 3,
      ganador: 1,
      posicion: null,
      imagen: 'https://i.imgur.com/8YWExKM.jpeg',
    },
    {
      id: '2',
      nombre: 'Andoni Álvarez (DÚO Mejores Amigos)',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://avatars.githubusercontent.com/u/153908128?v=4',
    },
  
    {
      id: '39',
      nombre: 'Andrea Nuñez (DÚO Las hermanas Lai)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/IpWUcqC.jpeg',
    },
    {
      id: '27',
      nombre: 'Andrea Ogando (DÚO Lorem Ipsum)',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/kIGKlZK.jpeg',
    },
    {
      id: '56',
      nombre: 'Anxo Soilán (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/we6pmV6.jpeg',
    },
   
    {
      id: '9',
      nombre: 'Bea Vázquez (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/kzHs3iO.jpeg',
    },
    {
      id: '46',
      nombre: 'Belén Pole (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/UBrQPAZ.jpeg',
    },
    {
      id: '10',
      nombre: 'Breo da Sousa (DÚO PENDIENTE)',
      puntis: 0,
      //maria pita//
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/IvqMdu4.jpeg',
    },
    {
      id: '11',
      nombre: 'Carlos Nogueira (DÚO GangSOS)',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/YvwjqvG.jpeg',
    },
    {
      id: '28',
      nombre: 'Cora Diaz (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/zoJjy5v.jpeg',
    },
    {
      id: '29',
      nombre: 'Cristina Casas (DÚO Soseras Sosez)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/eQfFIe4.jpeg',
    },
    {
      id: '30',
      nombre: 'Deborah Forrester (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/LP5Idr3.jpeg',
    },
    {
      id: '53',
      nombre: 'Diego Novio Belén (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/J493wRE.jpeg',
    },
    {
      id: '12',
      nombre: 'Don Facto (DÚO Proyecto Hombre)',
      puntis: 1,
      ganador: 1,
      posicion: null,
      imagen: 'https://imgur.com/njXo3mJ.jpeg',
    },
    
    {
      id: '51',
      nombre: 'Helena Aurora (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/UBrQPAZ.jpeg',
    },
    {
      id: '31',
      nombre: 'Francisco Encabo (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/LP5Idr3.jpeg',
    },
    {
      id: '13',
      nombre: 'Frank Díaz (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/Zxott5t.jpeg',
    },
   /* INACTIVO 2025 O pts
    {
      id: '58',
      nombre: 'Gabri Orizales',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/NquGdyO.jpeg',
    },*/
    {
      id: '14',
      nombre: 'Gojo Carracedo (DÚO Forzas do Eixo)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/Dfdenvn.jpeg',
    },
    {
      id: '49',
      nombre: 'Iria Ventosinos (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/Uknj5o9.jpeg',
    },
    {
      id: '32',
      nombre: 'Isa Vázquez (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/hperML2.jpeg',
    },
   
    {
      id: '48',
      nombre: 'Jacobo Camba (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/E0ntJlr.jpeg',
    },
    {
      id: '15',
      nombre: 'Javi Llinares (DÚO PENDIENTE)',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen:
        'https://imgur.com/lBXekc6.jpeg',
    },
    {
      id: '77',
      nombre: 'Javi El Bueno (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/3AHrHId.jpeg',
    },
      {
      id: '71',
      nombre: 'José Ruiz (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: '',
    },
    {
      id: '44',
      nombre: 'Kike Lagares (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/kyRyBfK.jpeg',
    },
    {
      id: '17',
      nombre: 'Laura Lua (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/UBrQPAZ.jpeg',
    },
 
    {
      id: '38',
      nombre: 'Lidia Vilanova (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/vYgEpQk.jpeg',
    },
    {
      id: '40',
      nombre: 'Maria Ubeda (DÚO Honeymoon)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/cOPjYLv.jpeg',
    },
     {
      id: '81',
      nombre: 'Mateo Iglesias (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: '',
    },
     {
      id: '80',
      nombre: 'Mia Otero (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: '',
    },
    {
      id: '47',
      nombre: 'Maria Selgas (DÚO PENDIENTE)',
      puntis: 1,
      ganador: 1,
      posicion: null,
      imagen: 'https://imgur.com/pjWxyj2.jpeg',
    },
     {
      id: '74',
      nombre: 'Maria Diz (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/ghX05Hb.jpeg',
    },
    {
      id: '19',
      nombre: 'Marta Cortizas (DÚO CHAT TERRA)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen:
        'https://media.licdn.com/dms/image/D4D03AQEcNubOb84q1Q/profile-displayphoto-shrink_200_200/0/1669409423435?e=1721260800&v=beta&t=GBq2LjiH50s23cKVK2lH-6weWXDaf093brDMlpHSHis',
    },
    {
      id: '20',
      nombre: 'Nacho Pena (DÚO Abrazos y Monsters)',
      puntis: 3,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/4uzrk2s.jpeg',
    },
   
    {
      id: '50',
      nombre: 'Nuria Medicinas (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/9gw6fF2.jpeg',
    },
    {
      id: '21',
      nombre: 'Nirei Orange (DÚO Speed Y Friends)',
      puntis: 3,
      ganador: 1,
      posicion: null,
      imagen:
        'https://avatars.githubusercontent.com/u/69577078?v=4',
    },
    {
      id: '22',
      nombre: 'Pablo Saborido (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/bJoHy5V.jpeg',
    },
    {
      id: '23',
      nombre: 'Paloma Redondo (DÚO Cuatro Coronas)',
      puntis: 0,
      ganador: 2,
      posicion: null,
      imagen: 'https://imgur.com/kqbpMDo.jpeg',
    },
    {
      id: '36',
      nombre: 'Perfe López (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/EKEmIVj.jpeg',
    },
    {
      id: '4',
      nombre: 'Rebeca Llacer (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/8pDnFRW.jpeg',
    },
    {
      id: '1',
      nombre: 'Roberto Lago (DÚO Abrazos y Monsters)',
      puntis: 3,
      ganador: 0,
      posicion: null,
      imagen:
        'https://avatars.githubusercontent.com/u/157411142?s=400&u=02bb909ddf275c039273a665b3ac1bae39e882e4&v=4',
    },
     {
      id: '73',
      nombre: 'Rodrigo Novo (DÚO Lorem Ipsum)',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/4Ip96es.jpeg',
    },
/* inactivo 2025 0 pts
    {
      id: '35',
      nombre: 'Ruben Rufo',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/HgwvTu8.jpeg',
    },*/
    {
      id: '73',
      nombre: 'Rupert (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/APr7IdQ.jpeg',
    },
    {
      id: '24',
      nombre: 'Sara Villamarín (DÚO Mejores Amigos)',
      puntis: 1,
      ganador: 1,
      posicion: null,
      imagen: 'https://imgur.com/YhAM5KQ.jpeg',
    },
     {
      id: '75',
      nombre: 'Sergio Gonzalez (DÚO Soseras Sosez)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/NuTJbm8.jpeg',
    },
  
    {
      id: '6',
      nombre: 'Victor Castro (DÚO Cuatro Coronas)',
      puntis: 1,
      ganador: 2,
      posicion: null,
      imagen: 'https://imgur.com/0Ll40Sh.jpeg',
    },
     {
      id: '67',
      nombre: 'Danae (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/YCGuOin.jpeg',
    },
      {
      id: '66',
      nombre: 'Miguel Actor (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/2qK1J4g.jpeg',
    },
     {
      id: '68',
      nombre: 'Sara Mínguez (DÚO GangSOS)',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/0IuzGWi.jpeg',
    },
         {
      id: '69',
      nombre: 'Danil Ruso (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/5pvJIK8.jpeg',
    },
     /* inactivo 2025 0pts   {
      id: '70',
      nombre: 'Jose ',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: '',
    },*/
  
           {
      id: '76',
      nombre: 'Belén Sierra (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: '',
    },
         {
      id: '72',
      nombre: 'Patri Ludeña (DÚO PENDIENTE)',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: '',
    },
    { id: '77', 
       nombre: 'Luchenso (DÚO PENDIENTE)',
       puntis: 0, 
       ganador: 0, 
       posicion: null, 
       imagen: 'https://imgur.com/tAr0HVQ.jpeg' },
     { id: '78', 
       nombre: 'Esperanza Heliosofista (DÚO PENDIENTE)',
       puntis: 0, 
       ganador: 0, 
       posicion: null, 
       imagen: 'https://imgur.com/QPWMs2O.jpeg' },
       { id: '79', 
       nombre: 'Carlos Sobrido (DÚO Honeymoon)',
       puntis: 0, 
       ganador: 0, 
       posicion: null, 
       imagen: 'https://imgur.com/x4mlTid.jpeg' },
   

    // ,
    // ,
    //

    // { id: '60', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    // { id: '61', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    // { id: '62', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    // { id: '63', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    //
    //
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
    switch (posicion) {
      case 1:
        return {
          'background-color': '#D4AF37',
          'background-image':
            'linear-gradient(25deg, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.5) 45%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 78%, rgba(255, 255, 255, 0.6) 100%)',
          'background-size': '100% 100%',
        };
      case 2:
        return {
          'background-color': '#C0C0C0',
          'background-image':
            'linear-gradient(25deg, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.9) 80%, rgba(255, 255, 255, 0.6) 100%)',
          'background-size': '100% 100%',
        };
      case 3:
        return {
          'background-color': '#762c28',
          'background-image':
            'linear-gradient(25deg, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 80%, rgba(255, 255, 255, 0.6) 90%)',
          'background-size': '100% 100%',
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
      this.usuarioEncontrado = this.usuarios.filter((usuario) =>
        usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      );
      this.mostrarTable = false;
      console.log(this.usuarioEncontrado);
    } else {
      this.textoBusqueda = 'buscar concursante';
    }

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
