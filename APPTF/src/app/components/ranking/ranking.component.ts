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
  { id: '1', nombre: 'Roberto Lago', puntis: 10, ganador: 2, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/46130676_10214541339702040_1860703454670880768_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RcVSe7Ugq68Q7kNvgHBGQRE&_nc_ht=scontent-cph2-1.xx&oh=00_AYAAL6W1aOjAtJ9UZhxnpX5PjGbcl9RNtx5NdRKJQU-oOA&oe=66697E55" },
  { id: '2', nombre: 'Andoni Alvarez', puntis: 7, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.18169-1/1924362_705699672843514_8086895978820017572_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S58AIkL66yQQ7kNvgEK-Ukf&_nc_ht=scontent-cph2-1.xx&oh=00_AYBJ8lgFigE6KpQ1g7gpbIOygW4DzsI6iG_cUTc9kDquGw&oe=66699578"},
  { id: '3', nombre: 'Adrian Martinez', puntis: 12, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/434150938_10231527589787866_1286238576122825814_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=imRhkh4qJVsQ7kNvgG5POS4&_nc_ht=scontent-cph2-1.xx&oh=00_AYCar5ly_7hBLj1eXppCiOjF8dlHg4kqZJqYFip2EzOpew&oe=6648000F" },
  { id: '4', nombre: 'Rebeca Llacer', puntis: 42, ganador: 0, posicion: null, imagen: "https://scontent.cdninstagram.com/v/t51.29350-15/351469527_958899248791508_6753528921694650372_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDc2OC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=i_4iWBCCx0kQ7kNvgG1Izfp&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzExNzg4OTcyMzgwNDY2OTUxNQ%3D%3D.2-ccb7-5&oh=00_AYAx0vR66qG5Fdb08uYTgPRDTRBIwMureRS9sGtzyTaMcg&oe=66460F69&_nc_sid=10d13b" },
  { id: '6', nombre: 'Victor Castro', puntis: 2, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/46485568_10216471807655052_959136368372482048_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZNhvEDDyJ9YQ7kNvgF4hMY0&_nc_ht=scontent-cph2-1.xx&oh=00_AYC_iyJoihdI45NhyiScpPQGrRvP22fqOLPKISxOvFe-aQ&oe=66699697" },
  { id: '7', nombre: 'Alvaro Relojers', puntis: 0, ganador: 1, posicion: null, imagen: "https://img.freepik.com/fotos-premium/personaje-dibujos-animados-sombrerero-loco-gafas-vapor-sombrero-generativo-ai_974533-60607.jpg" },
  { id: '8', nombre: 'Ana', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '9', nombre: 'Bea Coru', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '10', nombre: 'Breo', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/13161961_10208524106675434_66057912459395833_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zMOoeK1VUU0Q7kNvgFZGHiE&_nc_ht=scontent-cph2-1.xx&oh=00_AYAWXoBl60nsXF2jTZF6KMZhFL0GG28Vh9-iODOEj5v6QA&oe=6669B316" },
  { id: '11', nombre: 'Carlos Mastodonte', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/95333152_3471650282850724_5791050786272182272_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S5-mO-Jnl7cQ7kNvgGf-YbP&_nc_ht=scontent-cph2-1.xx&oh=00_AYASimp3SWi1sm4Ya1jnRUYe_iTmiFqwPwUcRG_TJA1caA&oe=66699449" },
  { id: '12', nombre: 'Facto ', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '13', nombre: 'Frank', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/424921838_7416601495027083_9160381801821772460_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=V001XLWihOIQ7kNvgEI06ZL&_nc_ht=scontent-cph2-1.xx&oh=00_AYCu-QYPZzWEGxeV2KNmal4dvuxd8GcgP-51NHSqSr3iIQ&oe=66481513" },
  { id: '14', nombre: 'Gonzalo', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/33404515_2066652753348994_819328203565826048_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=osban8dG6BcQ7kNvgFAvTic&_nc_ht=scontent-cph2-1.xx&oh=00_AYAMHUImsgl_Ra3XfqUDM2C-dRwuokW865ecm0J4Zj-h-g&oe=6669986C" },
  { id: '15', nombre: 'Javi Llinares', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '16', nombre: 'Lai Lai', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/81988661_10219950909735659_1751170918060654592_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lbG7AZ7XqxoQ7kNvgH1Gc3y&_nc_ht=scontent-cph2-1.xx&oh=00_AYCGspQcZk6I37IYlOTh23YyhCT5FPLWCBVD2xTzOlio4A&oe=6669AC3D" },
  { id: '17', nombre: 'Laura Lua', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '18', nombre: 'Maria Selgas', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '19', nombre: 'Marta', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/119072912_10221465636103660_41778676768954141_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BkLaaOf60_oQ7kNvgGKVyq9&_nc_ht=scontent-cph2-1.xx&oh=00_AYBIBPaJWzyzGaudKO8hXQvyzqtG92X2M4GnddkrG-7TxA&oe=66698A83" },
  { id: '20', nombre: 'Nacho', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/15122929_122397488243752_1845174043164813098_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=StH7Fpp_FHUQ7kNvgGHaFFy&_nc_ht=scontent-cph2-1.xx&oh=00_AYC-NKmOgB4unvWyyZzVI3Pev2EuSgPlPfYFpqW6rGyUlA&oe=66699E2E" },
  { id: '21', nombre: 'Nirei', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '22', nombre: 'Pablo Vigo', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '23', nombre: 'Paloma', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/89655092_10156825449121176_3477974124419088384_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p4_Y61cz9rUQ7kNvgGwusCe&_nc_ht=scontent-cph2-1.xx&oh=00_AYAxF8kkEVGkmng3UiMH8a5eWISraFcFsIYfPM3hLcPtRg&oe=6669A43D" },
  { id: '24', nombre: 'Sara', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/17098009_1326595870768289_461852899980776914_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vvYSX13GiZwQ7kNvgFUaxTS&_nc_ht=scontent-cph2-1.xx&oh=00_AYAIGqBhKw4oPGNve6XG1F4IPGW9RDzhi8xvfJv_SxRRbg&oe=66698CD9" },
  { id: '25', nombre: 'Aitor Coru', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '26', nombre: 'Alvaro Verde', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.18169-1/1012690_10151954469500292_115407491_n.jpg?stp=c39.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tq-zWdYWHmMQ7kNvgH22-1Z&_nc_ht=scontent-cph2-1.xx&oh=00_AYCec0eIJaxGK1CAa88NBX2EISFSHsuZaZoj57wi730VtA&oe=66699820" },
  { id: '27', nombre: 'Andrew', puntis: 0, ganador: 1, posicion: null, imagen: "" },
  { id: '28', nombre: 'Coris', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '29', nombre: 'Cristina', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '30', nombre: 'Deborah', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '31', nombre: 'Francisco Encabo', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '32', nombre: 'Isa', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/182766420_3584959125062707_19879512394109716_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vbSEjCXZywUQ7kNvgH7naxn&_nc_ht=scontent-cph2-1.xx&oh=00_AYCOFOuhRKNFUda-d-dV2RGnCw4MF2OfHvzb09k_xrm4-A&oe=6669BD7F" },
  { id: '33', nombre: 'Nana Huertana', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '34', nombre: 'Ru', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '35', nombre: 'Ruben GV', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '36', nombre: 'Perfe', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/125876670_1560601090776257_3636456647961493338_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wxp4RV8k-CcQ7kNvgEvKfg0&_nc_ht=scontent-cph2-1.xx&oh=00_AYB6AiWGvowTEsC0aapcBIYbY6q8vHW6JmJBMHSCHAiIAw&oe=6669918B" },
  // { id: '37', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  // { id: '38', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  // { id: '39', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  // { id: '40', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  // { id: '41', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  // { id: '42', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
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





