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
  miembros?: string[]; // Nombre + inicial del apellido de cada integrante del duo
}

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  // ============================================================
  // CONCURSO 2026: EDICION POR PAREJAS (DUOS)
  // Los concursantes individuales de anos anteriores quedan
  // comentados a continuacion para poder restaurarlos el ano
  // que viene, cuando el concurso vuelva a formato individual.
  //
  // Los puntos de cada duo NO son la suma de sus dos integrantes:
  // ambos reflejaban el mismo punto de equipo, asi que se coge
  // un unico valor (el de los dos, ya que deberian coincidir).
  // La imagen es la de uno de los dos integrantes, elegida al azar
  // (si uno no tenia imagen, se usa la del que si tenia).
  // Actualiza 'puntis' a mano cada semana como hasta ahora.
  //
  // ATENCIÓN: en estos equipos los dos integrantes NO tenían los
  // mismos puntis/ganador (deberían coincidir). Se cogió el valor
  // más alto de forma provisional, revisa y corrige a mano si hace falta:
  //   - Proyecto Hombre: puntis=[2, 1], ganador=[0, 1] -> se usó el valor más alto, REVISA cuál es el correcto
  //   - Mejores Amigos: puntis=[1, 1], ganador=[0, 1] -> se usó el valor más alto, REVISA cuál es el correcto
  //   - Lorem Ipsum: puntis=[2, 1], ganador=[0, 0] -> se usó el valor más alto, REVISA cuál es el correcto
  //   - Purpurine Girls: puntis=[8, 8], ganador=[1, 0] -> se usó el valor más alto, REVISA cuál es el correcto
  //   - Puro Palique: puntis=[0, 1], ganador=[0, 0] -> se usó el valor más alto, REVISA cuál es el correcto
  //   - Cuatro Coronas: puntis=[2, 3], ganador=[2, 2] -> se usó el valor más alto, REVISA cuál es el correcto
  // ============================================================

  /* ------- CONCURSANTES INDIVIDUALES (guardados para el ano que viene) -------

    //     // Usar la interfaz Usuario para asegurar la tipificación
    //     {
    //       id: '3',
    //       nombre: 'Adrian Martínez (Proyecto Hombre)',
    //       puntis: 2,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/iGHvV9L.jpeg',
    //     },
    //     {
    //       id: '25',
    //       nombre: 'Aitor Nuñez (CHAT TERRA)',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/b9OHLEm.jpeg',
    //     },
    //     {
    //       id: '16',
    //       nombre: 'Alejandra Lai (Las hermanas Lai)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/eQjiSrv.jpeg',
    //     },
    //     {
    //       id: '37',
    //       nombre: 'Alejandra Mangano (Los Alejandres)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/UV3B3eI.jpeg',
    //     },
    //     {
    //       id: '43',
    //       nombre: 'Alejandro Barba (Los Alejandres)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/Hg14P65.jpeg',
    //     },
    //     {
    //       id: '42',
    //       nombre: 'Alejandro Ces (Los Inesperados)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/N65lQWi.jpeg',
    //     },
    //     /* NO ACTIVO 2025
    //     {
    //       id: '41',
    //       nombre: 'Alejandro Fraga', 
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/10ZfN8x.jpeg',
    //     },*/

    //      /* NO ACTIVO 2025
    //     {
    //       id: '45',
    //       nombre: 'Alicia Relojero',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/m1EsTYR.jpeg',
    //     },*/

    //      /* NO ACTIVO 2025
    //     {
    //       id: '7',
    //       nombre: 'Alvaro Relojero',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen:
    //         'https://img.freepik.com/fotos-premium/personaje-dibujos-animados-sombrerero-loco-gafas-vapor-sombrero-generativo-ai_974533-60607.jpg',
    //     },*/
    //     {
    //       id: '26',
    //       nombre: 'Alvaro Verde (Dos Personas)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/mMEBKcM.jpeg',
    //     },
    //     {
    //       id: '8',
    //       nombre: 'Ana Esfenoides (Speed Y Friends)',
    //       puntis: 12,
    //       ganador: 1,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/8YWExKM.jpeg',
    //     },
    //     {
    //       id: '2',
    //       nombre: 'Andoni Álvarez (Mejores Amigos)',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://avatars.githubusercontent.com/u/153908128?v=4',
    //     },

    //     {
    //       id: '39',
    //       nombre: 'Andrea Nuñez (Las hermanas Lai)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/IpWUcqC.jpeg',
    //     },
    //     {
    //       id: '27',
    //       nombre: 'Andrea Ogando (Lorem Ipsum)',
    //       puntis: 2,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/kIGKlZK.jpeg',
    //     },
    //     {
    //       id: '56',
    //       nombre: 'Anxo Soilán (Canteira Lucense)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/we6pmV6.jpeg',
    //     },

    //     {
    //       id: '9',
    //       nombre: 'Bea Vázquez (Los Inesperados)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/kzHs3iO.jpeg',
    //     },
    //     {
    //       id: '46',
    //       nombre: 'Belén Pole (Amigas del alma)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/UBrQPAZ.jpeg',
    //     },
    //     {
    //       id: '10',
    //       nombre: 'Breo da Sousa (Deborahndo Cañotos)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/IvqMdu4.jpeg',
    //     },
    //     {
    //       id: '11',
    //       nombre: 'Carlos Nogueira (GangSOS)',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/YvwjqvG.jpeg',
    //     },
    //     {
    //       id: '28',
    //       nombre: 'Cora Diaz (Dos Personas)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/zoJjy5v.jpeg',
    //     },
    //     {
    //       id: '29',
    //       nombre: 'Cristina Casas (Soseras Sósez)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/eQfFIe4.jpeg',
    //     },
    //     {
    //       id: '30',
    //       nombre: 'Deborah Forrester (Deborahndo Cañotos)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/LP5Idr3.jpeg',
    //     },
    //     {
    //       id: '53',
    //       nombre: 'Diego Novio Belén (Amigos de Infancia)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/J493wRE.jpeg',
    //     },
    //     {
    //       id: '12',
    //       nombre: 'Don Facto (Proyecto Hombre)',
    //       puntis: 1,
    //       ganador: 1,
    //       posicion: null,
    //       imagen: 'https://imgur.com/njXo3mJ.jpeg',
    //     },

    //     {
    //       id: '51',
    //       nombre: 'Helena Aurora (Amigos de Infancia)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/UBrQPAZ.jpeg',
    //     },
    //     {
    //       id: '31',
    //       nombre: "Francisco Encabo (Franks)",
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/LP5Idr3.jpeg',
    //     },
    //     {
    //       id: '13',
    //       nombre: 'Frank Díaz (Franks)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/Zxott5t.jpeg',
    //     },

    //     {
    //       id: '58',
    //       nombre: 'Bea Pérez (Forzas do Eixo)',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/A7WMOhA.jpeg',
    //     },
    //     {
    //       id: '14',
    //       nombre: 'Gojo Carracedo (Forzas do Eixo)',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/Dfdenvn.jpeg',
    //     },
    //     {
    //       id: '49',
    //       nombre: 'Iria Ventosinos (Canteira Lucense)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/Uknj5o9.jpeg',
    //     },
    //     {
    //       id: '32',
    //       nombre: 'Isa Vázquez (NOMBRE PENDIENTE)',
    //       puntis: 3,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/hperML2.jpeg',
    //     },

    //     {
    //       id: '48',
    //       nombre: 'Jacobo Camba (Tipos Normales)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/E0ntJlr.jpeg',
    //     },
    //     {
    //       id: '15',
    //       nombre: 'Javi Llinares (Perfectos Coruños)',
    //       puntis: 3,
    //       ganador: 0,
    //       posicion: null,
    //       imagen:
    //         'https://imgur.com/lBXekc6.jpeg',
    //     },
    //     {
    //       id: '77',
    //       nombre: 'Javi El Bueno (Duo Divertido)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/3AHrHId.jpeg',
    //     },
    //       {
    //       id: '71',
    //       nombre: 'José Ruiz (Duo Divertido)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: '',
    //     },
    //     {
    //       id: '44',
    //       nombre: 'Kike Lagares (Completos Conocidos )',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/kyRyBfK.jpeg',
    //     },
    //     {
    //       id: '17',
    //       nombre: 'Laura Lua (Completos Conocidos)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/UBrQPAZ.jpeg',
    //     },

    //     {
    //       id: '38',
    //       nombre: 'Lidia Vilanova (Amigas del alma)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/vYgEpQk.jpeg',
    //     },
    //     {
    //       id: '40',
    //       nombre: 'Maria Ubeda (Honeymoon)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/cOPjYLv.jpeg',
    //     },
    //      {
    //       id: '81',
    //       nombre: 'Mateo Iglesias (Tipos Normales)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: '',
    //     },
    //      {
    //       id: '80',
    //       nombre: 'Mia Otero (Hermanazas)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: '',
    //     },
    //     {
    //       id: '47',
    //       nombre: 'Maria Selgas (Purpurine Girls)',
    //       puntis: 8,
    //       ganador: 1,
    //       posicion: null,
    //       imagen: 'https://imgur.com/pjWxyj2.jpeg',
    //     },
    //      {
    //       id: '74',
    //       nombre: 'Maria Diz (Hermanazas)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/ghX05Hb.jpeg',
    //     },
    //     {
    //       id: '19',
    //       nombre: 'Marta Cortizas (CHAT TERRA)',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen:
    //         'https://media.licdn.com/dms/image/D4D03AQEcNubOb84q1Q/profile-displayphoto-shrink_200_200/0/1669409423435?e=1721260800&v=beta&t=GBq2LjiH50s23cKVK2lH-6weWXDaf093brDMlpHSHis',
    //     },
    //     {
    //       id: '20',
    //       nombre: 'Nacho Pena (Abrazos y Monsters)',
    //       puntis: 3,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/4uzrk2s.jpeg',
    //     },

    //     {
    //       id: '50',
    //       nombre: 'Nuria Medicinas (Purpurine Girls)',
    //       puntis: 8,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/9gw6fF2.jpeg',
    //     },
    //     {
    //       id: '21',
    //       nombre: 'Nirei Orange (Speed Y Friends)',
    //       puntis: 12,
    //       ganador: 1,
    //       posicion: null,
    //       imagen:
    //         'https://avatars.githubusercontent.com/u/69577078?v=4',
    //     },
    //     {
    //       id: '22',
    //       nombre: 'Pablo Saborido (Puro Palique)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/bJoHy5V.jpeg',
    //     },
    //     {
    //       id: '23',
    //       nombre: 'Paloma Redondo (Cuatro Coronas)',
    //       puntis: 2,
    //       ganador: 2,
    //       posicion: null,
    //       imagen: 'https://imgur.com/kqbpMDo.jpeg',
    //     },
    //     {
    //       id: '36',
    //       nombre: 'Perfe López (Perfectos Coruños)',
    //       puntis: 3,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/EKEmIVj.jpeg',
    //     },
    //     {
    //       id: '4',
    //       nombre: 'Rebeca Llacer (Puro Palique)',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/8pDnFRW.jpeg',
    //     },
    //     {
    //       id: '1',
    //       nombre: 'Roberto Lago (Abrazos y Monsters)',
    //       puntis: 3,
    //       ganador: 0,
    //       posicion: null,
    //       imagen:
    //         'https://avatars.githubusercontent.com/u/157411142?s=400&u=02bb909ddf275c039273a665b3ac1bae39e882e4&v=4',
    //     },
    //      {
    //       id: '73',
    //       nombre: 'Rodrigo Novo (Lorem Ipsum)',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/4Ip96es.jpeg',
    //     },
    // /* inactivo 2025 0 pts
    //     {
    //       id: '35',
    //       nombre: 'Ruben Rufo',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/HgwvTu8.jpeg',
    //     },*/
    //     {
    //       id: '73',
    //       nombre: 'Rupert (Pareja de Competidores)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/APr7IdQ.jpeg',
    //     },
    //     {
    //       id: '24',
    //       nombre: 'Sara Villamarín (Mejores Amigos)',
    //       puntis: 1,
    //       ganador: 1,
    //       posicion: null,
    //       imagen: 'https://imgur.com/YhAM5KQ.jpeg',
    //     },
    //      {
    //       id: '75',
    //       nombre: 'Sergio Gonzalez (Soseras Sósez)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/NuTJbm8.jpeg',
    //     },

    //     {
    //       id: '6',
    //       nombre: 'Victor Castro (Cuatro Coronas)',
    //       puntis: 3,
    //       ganador: 2,
    //       posicion: null,
    //       imagen: 'https://imgur.com/0Ll40Sh.jpeg',
    //     },
    //      {
    //       id: '67',
    //       nombre: 'Danae (Pareja de Competidores)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/YCGuOin.jpeg',
    //     },
    //       {
    //       id: '66',
    //       nombre: 'Miguel Actor (Uña y carne)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/2qK1J4g.jpeg',
    //     },
    //      {
    //       id: '68',
    //       nombre: 'Sara Mínguez (GangSOS)',
    //       puntis: 1,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/0IuzGWi.jpeg',
    //     },
    //     {
    //       id: '69',
    //       nombre: 'Danil Ruso (Equipo a tope)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://imgur.com/5pvJIK8.jpeg',
    //     },
    //       {
    //       id: '70',
    //       nombre: 'Ana Garbayo (NOMBRE PENDIENTE)',
    //       puntis: 3,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: 'https://i.imgur.com/4xlrF6Y.jpeg',
    //     },
    //     {
    //       id: '76',
    //       nombre: 'Belén Sierra (Equipo a tope)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: '',
    //     },
    //     {
    //       id: '72',
    //       nombre: 'Patri Ludeña (Uña y carne)',
    //       puntis: 0,
    //       ganador: 0,
    //       posicion: null,
    //       imagen: '',
    //     },
    //     { 
    //       id: '77', 
    //       nombre: 'Luchenso (Irresistibles)',
    //       puntis: 0, 
    //       ganador: 0, 
    //       posicion: null, 
    //       imagen: 'https://imgur.com/tAr0HVQ.jpeg' },
    //     {
    //       id: '78', 
    //       nombre: 'Esperanza Heliosofista (Irresistibles)',
    //       puntis: 0, 
    //       ganador: 0, 
    //       posicion: null, 
    //       imagen: 'https://imgur.com/QPWMs2O.jpeg' },
    // { id: '79', 
    //        nombre: 'Carlos Sobrido (Honeymoon)',
    //        puntis: 0, 
    //        ganador: 0, 
    //        posicion: null, 
    //        imagen: 'https://imgur.com/x4mlTid.jpeg' },


    //     // ,
    //     // ,
    //     //

    //     // { id: '60', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    //     // { id: '61', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    //     // { id: '62', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    //     // { id: '63', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    //     //
    //     //
  

  usuarios: usuario[] = [
    {
      id: '1',
      nombre: 'Abrazos y Monsters',
      puntis: 15,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/C6JnvxQ.jpeg', // Nacho Pena + Roberto Lago  o
      miembros: ['Nacho', 'Roberto'],
    },
    {
      id: '2',
      nombre: 'Amigas del alma',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/UBrQPAZ.jpeg', // Belén Pole + Lidia Vilanova
      miembros: ['Belén', 'Lidia'],
    },
    {
      id: '3',
      nombre: 'Amigos de Infancia',
      puntis: 2,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/J493wRE.jpeg', // Diego Novio Belén + Helena Aurora
      miembros: ['Diego N.B.', 'Helena'],
    },
    {
      id: '4',
      nombre: 'Canteira Lucense',
      puntis: 10,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/we6pmV6.jpeg', // Anxo Soilán + Iria Ventosinos
      miembros: ['Iria', 'Anxo'],
    },
    {
      id: '5',
      nombre: 'CHAT TERRA',
      puntis: 20,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/b9OHLEm.jpeg', // Aitor Nuñez + Marta Cortizas
      miembros: ['Aitor', 'Marta'],
    },
    {
      id: '6',
      nombre: 'Completos Conocidos',
      puntis: 8,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/kyRyBfK.jpeg', // Kike Lagares + Laura Lua
      miembros: ['Kike', 'Lua'],
    },
    {
      id: '7',
      nombre: 'Cuatro Coronas',
      puntis: 22,
      ganador: 4,
      posicion: null,
      imagen: 'https://i.imgur.com/Xtujutc.jpeg', // Paloma Redondo + Victor Castro o
      miembros: ['Paloma', 'Victor'],
    },
    {
      id: '8',
      nombre: 'Deborahndo Cañotos',
      puntis: 23,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/M4Hkqqc.jpeg', // Breo da Sousa + Deborah Forrester
      miembros: ['Breo', 'Deborah'],
    },
    {
      id: '9',
      nombre: 'Dos Personas',
      puntis: 4,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/vvXakwV.jpeg', // Alvaro Verde + Cora Diaz
      miembros: ['Alvaro', 'Cora'],
    },
    {
      id: '10',
      nombre: 'Duo Divertido',
      puntis: 2,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/3AHrHId.jpeg', // Javi El Bueno + José Ruiz
      miembros: ['Javi Bueno', 'José Ruiz'],
    },
    {
      id: '11',
      nombre: 'Equipo a tope',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/5pvJIK8.jpeg', // Danil Ruso + Belén Sierra
      miembros: ['Danil R.', 'Belén S.'],
    },
    {
      id: '12',
      nombre: 'Forzas do Eixo',
      puntis: 7,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/Dfdenvn.jpeg', // Bea Pérez + Gojo Carracedo
      miembros: ['Bea Pérez', 'Gojo'],
    },
    {
      id: '13',
      nombre: 'Franks',
      puntis: 9,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/LP5Idr3.jpeg', // Francisco Encabo + Frank Díaz
      miembros: ['Fran', 'Frank'],
    },
    {
      id: '14',
      nombre: 'GangSOS',
      puntis: 16,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/YvwjqvG.jpeg', // Carlos Nogueira + Sara Mínguez
      miembros: ['Caglos', 'Sara M.'],
    },
    {
      id: '15',
      nombre: 'Hermanazas',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/ghX05Hb.jpeg', // Mia Otero + Maria Diz
      miembros: ['Mia', 'Maria Diz'],
    },
    {
      id: '16',
      nombre: 'Honeymoon',
      puntis: 1,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/x4mlTid.jpeg', // Maria Ubeda + Carlos Sobrido
      miembros: ['Mery Ubeda', 'Chivas'],
    },
    {
      id: '17',
      nombre: 'Irresistibles',
      puntis: 6,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/tAr0HVQ.jpeg', // Luchenso + Esperanza Heliosofista
      miembros: ['Luchenso', 'Esperanza'],
    },
    {
      id: '18',
      nombre: 'Las hermanas Lai',
      puntis: 5,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/IpWUcqC.jpeg', // Alejandra Lai + Andrea Nuñez
      miembros: ['Lai', 'Andrea'],
    },
    {
      id: '19',
      nombre: 'Lorem Ipsum',
      puntis: 15,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/4Ip96es.jpeg', // Andrea Ogando + Rodrigo Novo
      miembros: ['Andrew', 'Rodri Novo'],
    },
    {
      id: '20',
      nombre: 'Los Alejandres',
      puntis: 3,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/UV3B3eI.jpeg', // Alejandra Mangano + Alejandro Barba
      miembros: ['Alejandra M.', 'Alex Porron'],
    },
    {
      id: '21',
      nombre: 'Los Inesperados',
      puntis: 2,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/N65lQWi.jpeg', // Alejandro Ces + Bea Vázquez
      miembros: ['Ces', 'Bea Coru'],
    },
    {
      id: '22',
      nombre: 'Mejores Amigos',
      puntis: 18,
      ganador: 1,
      posicion: null,
      imagen: 'https://i.imgur.com/ToynapJ.jpeg', // Andoni Álvarez + Sara Villamarín
      miembros: ['Andoni', 'Sara V.'],
    },
    {
      id: '23',
      nombre: 'Física Y Física',
      puntis: 8,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/hperML2.jpeg', // Isa Vázquez + Ana Garbayo
      miembros: ['Isa', 'Ana G.'],
    },
    {
      id: '24',
      nombre: 'Pareja de Competidores',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/APr7IdQ.jpeg', // Rupert + Danae
      miembros: ['Rupert', 'Danae'],
    },
    {
      id: '25',
      nombre: 'Perfectos Coruños',
      puntis: 8,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/EKEmIVj.jpeg', // Javi Llinares + Perfe López
      miembros: ['Llina', 'Perfe'],
    },
    {
      id: '26',
      nombre: 'Proyecto Hombre',
      puntis: 5,
      ganador: 1,
      posicion: null,
      imagen: 'https://imgur.com/iGHvV9L.jpeg', // Adrian Martínez + Don Facto
      miembros: ['Adri', 'Facto'],
    },
    {
      id: '27',
      nombre: 'Puro Palique',
      puntis: 6,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/bJoHy5V.jpeg', // Pablo Saborido + Rebeca Llacer
      miembros: ['Pablo Vigo', 'Rebeca'],
    },
    {
      id: '28',
      nombre: 'Purpurine Girls',
      puntis: 14,
      ganador: 1,
      posicion: null,
      imagen: 'https://imgur.com/9gw6fF2.jpeg', // Maria Selgas + Nuria Medicinas
      miembros: ['Selgas', 'Nuria'],
    },
    {
      id: '29',
      nombre: 'Soseras Sósez',
      puntis: 8,
      ganador: 0,
      posicion: null,
      imagen: 'https://i.imgur.com/eQfFIe4.jpeg', // Cristina Casas + Sergio Gonzalez
      miembros: ['Cris', 'Sergio Lai'],
    },
    {
      id: '30',
      nombre: 'Speed Y Friends',
      puntis: 20,
      ganador: 2,
      posicion: null,
      imagen: 'https://i.imgur.com/8YWExKM.jpeg', // Ana Esfenoides + Nirei Orange
      miembros: ['Ana', 'Nirei'],
    },
    {
      id: '31',
      nombre: 'Tipos Normales',
      puntis: 0,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/E0ntJlr.jpeg', // Jacobo Camba + Mateo Iglesias
      miembros: ['Jaco Vigo', 'Mateo'],
    },
    {
      id: '32',
      nombre: 'Uña y carne',
      puntis: 2,
      ganador: 0,
      posicion: null,
      imagen: 'https://imgur.com/2qK1J4g.jpeg', // Miguel Actor + Patri Ludeña
      miembros: ['Miguel Porron', 'Patri'],
    },
    {
      id: '33',
      nombre: 'Ultima hora',
      puntis: 4,
      ganador: 0,
      posicion: null,
      imagen: '', // Eva Medicinas + Gonzalo Cardenete
      miembros: ['Eva Medicinas', 'Gonzalo Cardenete'],
    },
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