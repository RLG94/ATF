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
  { id: '1', nombre: 'Roberto Lago', puntis: 0, ganador: 0, posicion: null, imagen: "https://avatars.githubusercontent.com/u/157411142?s=400&u=02bb909ddf275c039273a665b3ac1bae39e882e4&v=4" },
  { id: '2', nombre: 'Andoni Álvarez', puntis: 0, ganador: 0, posicion: null, imagen: "https://avatars.githubusercontent.com/u/153908128?v=4"},
  { id: '3', nombre: 'Adrian Martínez', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/434150938_10231527589787866_1286238576122825814_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=imRhkh4qJVsQ7kNvgG5POS4&_nc_ht=scontent-cph2-1.xx&oh=00_AYCar5ly_7hBLj1eXppCiOjF8dlHg4kqZJqYFip2EzOpew&oe=6648000F" },
  { id: '4', nombre: 'Rebeca Llacer', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent.cdninstagram.com/v/t51.29350-15/351469527_958899248791508_6753528921694650372_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDc2OC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=i_4iWBCCx0kQ7kNvgG1Izfp&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzExNzg4OTcyMzgwNDY2OTUxNQ%3D%3D.2-ccb7-5&oh=00_AYAx0vR66qG5Fdb08uYTgPRDTRBIwMureRS9sGtzyTaMcg&oe=66460F69&_nc_sid=10d13b" },
  { id: '6', nombre: 'Victor Castro', puntis: 0, ganador: 2, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/46485568_10216471807655052_959136368372482048_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZNhvEDDyJ9YQ7kNvgF4hMY0&_nc_ht=scontent-cph2-1.xx&oh=00_AYC_iyJoihdI45NhyiScpPQGrRvP22fqOLPKISxOvFe-aQ&oe=66699697" },
  { id: '7', nombre: 'Alvaro Relojero', puntis:0, ganador: 0, posicion: null, imagen: "https://img.freepik.com/fotos-premium/personaje-dibujos-animados-sombrerero-loco-gafas-vapor-sombrero-generativo-ai_974533-60607.jpg" },
  { id: '8', nombre: 'Ana Esfenoides', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '9', nombre: 'Bea Coru', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '10', nombre: 'Breo da Sousa', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/13161961_10208524106675434_66057912459395833_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zMOoeK1VUU0Q7kNvgFZGHiE&_nc_ht=scontent-cph2-1.xx&oh=00_AYAWXoBl60nsXF2jTZF6KMZhFL0GG28Vh9-iODOEj5v6QA&oe=6669B316" },
  { id: '11', nombre: 'Carlos Nogueira', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/95333152_3471650282850724_5791050786272182272_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S5-mO-Jnl7cQ7kNvgGf-YbP&_nc_ht=scontent-cph2-1.xx&oh=00_AYASimp3SWi1sm4Ya1jnRUYe_iTmiFqwPwUcRG_TJA1caA&oe=66699449" },
  { id: '12', nombre: 'Facto', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/83219589_2518802625001117_4620912114985336832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vWVp6Hjwc3cQ7kNvgE0dKmt&_nc_ht=scontent-cph2-1.xx&oh=00_AYB93zqEaaTYrckZ0kfmMi_DI8PiodUMbHYkDZUoJ6UCGQ&oe=666A1FF7" },
  { id: '13', nombre: 'Frank Díaz', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/352054311_180246181675857_2063535867209173698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=b-4QgrATiugQ7kNvgG-tONB&_nc_oc=AdjsHCaZH2UJHHorSKfvHScpYxv43A7NFPpQCBaJ0F0REBe4pLtj5JsTqT4paWbaIg3pP1MlfJjHHPhq1rQNG1_O&_nc_ht=scontent-cph2-1.xx&oh=00_AYAjHu5Kbaq8V1xglHzmxbKltNSESUCv9GEVbm2Iym9jbg&oe=66486E71" },
  { id: '14', nombre: 'Gojo Carracedo', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/33404515_2066652753348994_819328203565826048_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=osban8dG6BcQ7kNvgFAvTic&_nc_ht=scontent-cph2-1.xx&oh=00_AYAMHUImsgl_Ra3XfqUDM2C-dRwuokW865ecm0J4Zj-h-g&oe=6669986C" },
  { id: '15', nombre: 'Javi Llinares', puntis: 0, ganador: 0, posicion: null, imagen: "https://media.licdn.com/dms/image/C4D03AQHoDPsk5BCx4A/profile-displayphoto-shrink_800_800/0/1663077274007?e=1721260800&v=beta&t=EFpBYLcsUE8dOJMqdmNi-mkQKPzznYYsgx0ECY0335Q" },
  { id: '16', nombre: 'Alejandra Lai', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/81988661_10219950909735659_1751170918060654592_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lbG7AZ7XqxoQ7kNvgH1Gc3y&_nc_ht=scontent-cph2-1.xx&oh=00_AYCGspQcZk6I37IYlOTh23YyhCT5FPLWCBVD2xTzOlio4A&oe=6669AC3D" },
  { id: '17', nombre: 'Laura Lua', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '18', nombre: 'Maria Selgas', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/64380070_10157475524309642_3813539859126026240_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I7mI8Xu531EQ7kNvgEAGSQM&_nc_oc=AdjA5d1wLYRzYu5U6x2p-cJrqMIbtjRnbESviTk1R9h3urzbVThbC__MvOCjs4rHG00YWGAVqhtZBY-pD5yZvN4N&_nc_ht=scontent-cph2-1.xx&oh=00_AYD4Lv5Db7eNn6YhmBv4XVTryYXYXw765XXm9YDPigx6LA&oe=666A0FED" },
  { id: '19', nombre: 'Marta Cortízas', puntis: 0, ganador: 0, posicion: null, imagen: "https://media.licdn.com/dms/image/D4D03AQEcNubOb84q1Q/profile-displayphoto-shrink_200_200/0/1669409423435?e=1721260800&v=beta&t=GBq2LjiH50s23cKVK2lH-6weWXDaf093brDMlpHSHis" },
  { id: '20', nombre: 'Nacho Pena', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/15122929_122397488243752_1845174043164813098_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=StH7Fpp_FHUQ7kNvgGHaFFy&_nc_ht=scontent-cph2-1.xx&oh=00_AYC-NKmOgB4unvWyyZzVI3Pev2EuSgPlPfYFpqW6rGyUlA&oe=66699E2E" },
  { id: '21', nombre: 'Nirei Orange', puntis: 0, ganador: 0, posicion: null, imagen: "https://media.licdn.com/dms/image/C4D03AQEJwPpFpT9EPg/profile-displayphoto-shrink_200_200/0/1633338767202?e=1721260800&v=beta&t=Bq-0jQePmmeHCPMx4dcQgqEehGOcPPSGG0B0nr60R5M" },
  { id: '22', nombre: 'Pablo Vigo', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '23', nombre: 'Paloma Redondo', puntis: 0, ganador: 2, posicion: null, imagen: "https://media.licdn.com/dms/image/D4D03AQFmeRXMF25ycg/profile-displayphoto-shrink_200_200/0/1696239339986?e=1721260800&v=beta&t=PCphlP6ISr0BJT_nURVmiEgf1inffynN923ZMh413sw" },
  { id: '24', nombre: 'Sara Villamarín', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/17098009_1326595870768289_461852899980776914_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vvYSX13GiZwQ7kNvgFUaxTS&_nc_ht=scontent-cph2-1.xx&oh=00_AYAIGqBhKw4oPGNve6XG1F4IPGW9RDzhi8xvfJv_SxRRbg&oe=66698CD9" },
  { id: '25', nombre: 'Aitor Nuñez', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '26', nombre: 'Alvaro Verde', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.18169-1/1012690_10151954469500292_115407491_n.jpg?stp=c39.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tq-zWdYWHmMQ7kNvgH22-1Z&_nc_ht=scontent-cph2-1.xx&oh=00_AYCec0eIJaxGK1CAa88NBX2EISFSHsuZaZoj57wi730VtA&oe=66699820" },
  { id: '27', nombre: 'Andrew', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '28', nombre: 'Cora Diaz', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/11731916_10207016321829199_5843471876986924564_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d5IzJy7PAFMQ7kNvgH5lRcX&_nc_ht=scontent-cph2-1.xx&oh=00_AYA42WxRWX7XjhKj1IQJYeQCvegwGpEisZlaxrQsi5dflg&oe=6669FB11" },
  { id: '29', nombre: 'Cristina Casas', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '30', nombre: 'Deborah', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '31', nombre: 'Francisco Encabo', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '32', nombre: 'Isa Vázquez', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/182766420_3584959125062707_19879512394109716_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vbSEjCXZywUQ7kNvgH7naxn&_nc_ht=scontent-cph2-1.xx&oh=00_AYCOFOuhRKNFUda-d-dV2RGnCw4MF2OfHvzb09k_xrm4-A&oe=6669BD7F" },
  { id: '33', nombre: 'Nana del Hue', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/418798963_10231561309366850_4349918652325316234_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w53cNRNC2eYQ7kNvgGkf9FO&_nc_ht=scontent-cph2-1.xx&oh=00_AYBDDHrxX7Z2KCWpKJNcADcMEyFBzdWqfkKzVnKWRBmYyw&oe=66485E69" },
  { id: '34', nombre: 'Jack Ruan', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/48372018_116652299371894_232590694034702336_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BvnRHCDAyEAQ7kNvgFEvX7b&_nc_ht=scontent-cph2-1.xx&oh=00_AYC4kJ3_pdNb0XxUBDzHoS4aP-yyeQFY--N8qIfofqZKRw&oe=666A250D" },
  { id: '35', nombre: 'Ruben GV', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '36', nombre: 'Perfe López', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/125876670_1560601090776257_3636456647961493338_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wxp4RV8k-CcQ7kNvgEvKfg0&_nc_ht=scontent-cph2-1.xx&oh=00_AYB6AiWGvowTEsC0aapcBIYbY6q8vHW6JmJBMHSCHAiIAw&oe=6669918B" },
  { id: '37', nombre: 'Alejandra Mangano', puntis: 0, ganador: 0, posicion: null, imagen: "" },
  { id: '38', nombre: 'Lidia Vilanova', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/17760794_1440847459288298_2788359475030718039_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NHWTqwQYOtIQ7kNvgGd9xbD&_nc_ht=scontent-cph2-1.xx&oh=00_AYCMTBfCqjCAdqG6T0Wv7Sk6MllhUsaglwexVCbTLklDHw&oe=6669FE53" },
  { id: '39', nombre: 'Andrea Nuñez', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/376784291_10229346334070468_329149336454632774_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v9oKV_ffO1MQ7kNvgEGy84m&_nc_ht=scontent-cph2-1.xx&oh=00_AYDE_pnxVK-xKM1dT3rE9jKv-9e_lMfjOtPCzq--xxPJDw&oe=66487FB7" },
  { id: '40', nombre: 'Maria Ubeda', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/52057098_2263112900625120_1840603072150110208_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9o111TO7fSkQ7kNvgF6BOa_&_nc_ht=scontent-cph2-1.xx&oh=00_AYAf6s7KnQPRRUXHhbau9G1OKLgDLzy6vmyykhRQRB20Qw&oe=666A29F6" },
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





