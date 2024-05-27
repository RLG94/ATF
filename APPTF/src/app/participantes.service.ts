import { Usuario } from './usuario';
import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CollectionReference } from 'firebase/firestore';


@Injectable({
  providedIn: 'root',
})
export class ParticipantesService {

  usuarios: Usuario[] = []  // Usar la interfaz Usuario para asegurar la tipificación
    //{ id: '1', nombre: 'Roberto Lago', puntis: 1, ganador: 0, posicion: null, imagen: "https://avatars.githubusercontent.com/u/157411142?s=400&u=02bb909ddf275c039273a665b3ac1bae39e882e4&v=4" },
    // { id: '2', nombre: 'Andoni Álvarez', puntis: 3, ganador: 0, posicion: null, imagen: "https://avatars.githubusercontent.com/u/153908128?v=4" },
    // { id: '3', nombre: 'Adrian Martínez', puntis: 3, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/434150938_10231527589787866_1286238576122825814_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=imRhkh4qJVsQ7kNvgG5POS4&_nc_ht=scontent-cph2-1.xx&oh=00_AYCar5ly_7hBLj1eXppCiOjF8dlHg4kqZJqYFip2EzOpew&oe=6648000F" },
    // { id: '4', nombre: 'Rebeca Llacer', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/8pDnFRW.jpeg" },
    // { id: '6', nombre: 'Victor Castro', puntis: 0, ganador: 2, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/46485568_10216471807655052_959136368372482048_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZNhvEDDyJ9YQ7kNvgF4hMY0&_nc_ht=scontent-cph2-1.xx&oh=00_AYC_iyJoihdI45NhyiScpPQGrRvP22fqOLPKISxOvFe-aQ&oe=66699697" },
    // { id: '7', nombre: 'Alvaro Relojero', puntis: 3, ganador: 0, posicion: null, imagen: "https://img.freepik.com/fotos-premium/personaje-dibujos-animados-sombrerero-loco-gafas-vapor-sombrero-generativo-ai_974533-60607.jpg" },
    // { id: '8', nombre: 'Ana Esfenoides', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/8YWExKM.jpeg" },
    // { id: '9', nombre: 'Bea Vazquez', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/kzHs3iO.jpeg" },
    // { id: '10', nombre: 'Breo da Sousa', puntis: 4, ganador: 0, posicion: null, imagen: "https://i.imgur.com/IvqMdu4.jpeg" },
    // { id: '11', nombre: 'Carlos Nogueira', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/95333152_3471650282850724_5791050786272182272_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S5-mO-Jnl7cQ7kNvgGf-YbP&_nc_ht=scontent-cph2-1.xx&oh=00_AYASimp3SWi1sm4Ya1jnRUYe_iTmiFqwPwUcRG_TJA1caA&oe=66699449" },
    // { id: '12', nombre: 'Don Facto', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/83219589_2518802625001117_4620912114985336832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vWVp6Hjwc3cQ7kNvgE0dKmt&_nc_ht=scontent-cph2-1.xx&oh=00_AYB93zqEaaTYrckZ0kfmMi_DI8PiodUMbHYkDZUoJ6UCGQ&oe=666A1FF7" },
    // { id: '13', nombre: 'Frank Díaz', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/352054311_180246181675857_2063535867209173698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=b-4QgrATiugQ7kNvgG-tONB&_nc_oc=AdjsHCaZH2UJHHorSKfvHScpYxv43A7NFPpQCBaJ0F0REBe4pLtj5JsTqT4paWbaIg3pP1MlfJjHHPhq1rQNG1_O&_nc_ht=scontent-cph2-1.xx&oh=00_AYAjHu5Kbaq8V1xglHzmxbKltNSESUCv9GEVbm2Iym9jbg&oe=66486E71" },
    // { id: '14', nombre: 'Gojo Carracedo', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/33404515_2066652753348994_819328203565826048_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=osban8dG6BcQ7kNvgFAvTic&_nc_ht=scontent-cph2-1.xx&oh=00_AYAMHUImsgl_Ra3XfqUDM2C-dRwuokW865ecm0J4Zj-h-g&oe=6669986C" },
    // { id: '15', nombre: 'Javi Llinares', puntis: 0, ganador: 0, posicion: null, imagen: "https://media.licdn.com/dms/image/C4D03AQHoDPsk5BCx4A/profile-displayphoto-shrink_800_800/0/1663077274007?e=1721260800&v=beta&t=EFpBYLcsUE8dOJMqdmNi-mkQKPzznYYsgx0ECY0335Q" },
    // { id: '16', nombre: 'Alejandra Lai', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/81988661_10219950909735659_1751170918060654592_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lbG7AZ7XqxoQ7kNvgH1Gc3y&_nc_ht=scontent-cph2-1.xx&oh=00_AYCGspQcZk6I37IYlOTh23YyhCT5FPLWCBVD2xTzOlio4A&oe=6669AC3D" },
    // { id: '17', nombre: 'Laura Lua', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/UBrQPAZ.jpeg" },
    // { id: '18', nombre: 'Maria Selgas', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/64380070_10157475524309642_3813539859126026240_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I7mI8Xu531EQ7kNvgEAGSQM&_nc_oc=AdjA5d1wLYRzYu5U6x2p-cJrqMIbtjRnbESviTk1R9h3urzbVThbC__MvOCjs4rHG00YWGAVqhtZBY-pD5yZvN4N&_nc_ht=scontent-cph2-1.xx&oh=00_AYD4Lv5Db7eNn6YhmBv4XVTryYXYXw765XXm9YDPigx6LA&oe=666A0FED" },
    // { id: '19', nombre: 'Marta Cortízas', puntis: 0, ganador: 0, posicion: null, imagen: "https://media.licdn.com/dms/image/D4D03AQEcNubOb84q1Q/profile-displayphoto-shrink_200_200/0/1669409423435?e=1721260800&v=beta&t=GBq2LjiH50s23cKVK2lH-6weWXDaf093brDMlpHSHis" },
    // { id: '20', nombre: 'Nacho Pena', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/15122929_122397488243752_1845174043164813098_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=StH7Fpp_FHUQ7kNvgGHaFFy&_nc_ht=scontent-cph2-1.xx&oh=00_AYC-NKmOgB4unvWyyZzVI3Pev2EuSgPlPfYFpqW6rGyUlA&oe=66699E2E" },
    // { id: '21', nombre: 'Nirei Orange', puntis: 0, ganador: 0, posicion: null, imagen: "https://media.licdn.com/dms/image/C4D03AQEJwPpFpT9EPg/profile-displayphoto-shrink_200_200/0/1633338767202?e=1721260800&v=beta&t=Bq-0jQePmmeHCPMx4dcQgqEehGOcPPSGG0B0nr60R5M" },
    // { id: '22', nombre: 'Pablo Vigo', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/HgwvTu8.jpeg" },
    // { id: '23', nombre: 'Paloma Redondo', puntis: 0, ganador: 2, posicion: null, imagen: "https://media.licdn.com/dms/image/D4D03AQFmeRXMF25ycg/profile-displayphoto-shrink_200_200/0/1696239339986?e=1721260800&v=beta&t=PCphlP6ISr0BJT_nURVmiEgf1inffynN923ZMh413sw" },
    // { id: '24', nombre: 'Sara Villamarín', puntis: 0, ganador: 1, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/17098009_1326595870768289_461852899980776914_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vvYSX13GiZwQ7kNvgFUaxTS&_nc_ht=scontent-cph2-1.xx&oh=00_AYAIGqBhKw4oPGNve6XG1F4IPGW9RDzhi8xvfJv_SxRRbg&oe=66698CD9" },
    // { id: '25', nombre: 'Aitor Nuñez', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/b9OHLEm.jpeg" },
    // { id: '26', nombre: 'Alvaro Verde', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/mMEBKcM.jpeg" },
    // { id: '27', nombre: 'Andrew', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/kIGKlZK.jpeg" },
    // { id: '28', nombre: 'Cora Diaz', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/11731916_10207016321829199_5843471876986924564_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d5IzJy7PAFMQ7kNvgH5lRcX&_nc_ht=scontent-cph2-1.xx&oh=00_AYA42WxRWX7XjhKj1IQJYeQCvegwGpEisZlaxrQsi5dflg&oe=6669FB11" },
    // { id: '29', nombre: 'Cristina Casas', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/eQfFIe4.jpeg" },
    // { id: '30', nombre: 'Deborah Forrester', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/LP5Idr3.jpeg" },
    // { id: '31', nombre: 'Francisco Encabo', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/LP5Idr3.jpeg" },
    // { id: '32', nombre: 'Isa Vázquez', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/182766420_3584959125062707_19879512394109716_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vbSEjCXZywUQ7kNvgH7naxn&_nc_ht=scontent-cph2-1.xx&oh=00_AYCOFOuhRKNFUda-d-dV2RGnCw4MF2OfHvzb09k_xrm4-A&oe=6669BD7F" },
    // { id: '33', nombre: 'Nana del Hue', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/418798963_10231561309366850_4349918652325316234_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w53cNRNC2eYQ7kNvgGkf9FO&_nc_ht=scontent-cph2-1.xx&oh=00_AYBDDHrxX7Z2KCWpKJNcADcMEyFBzdWqfkKzVnKWRBmYyw&oe=66485E69" },
    // { id: '34', nombre: 'Jack Ruan', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/48372018_116652299371894_232590694034702336_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BvnRHCDAyEAQ7kNvgFEvX7b&_nc_ht=scontent-cph2-1.xx&oh=00_AYC4kJ3_pdNb0XxUBDzHoS4aP-yyeQFY--N8qIfofqZKRw&oe=666A250D" },
    // { id: '35', nombre: 'Ruben GV', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/HgwvTu8.jpeg" },
    // { id: '36', nombre: 'Perfe López', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/125876670_1560601090776257_3636456647961493338_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wxp4RV8k-CcQ7kNvgEvKfg0&_nc_ht=scontent-cph2-1.xx&oh=00_AYB6AiWGvowTEsC0aapcBIYbY6q8vHW6JmJBMHSCHAiIAw&oe=6669918B" },
    // { id: '37', nombre: 'Alejandra Mangano', puntis: 0, ganador: 0, posicion: null, imagen: "https://i.imgur.com/UV3B3eI.jpeg" },
    // { id: '38', nombre: 'Lidia Vilanova', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/17760794_1440847459288298_2788359475030718039_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NHWTqwQYOtIQ7kNvgGd9xbD&_nc_ht=scontent-cph2-1.xx&oh=00_AYCMTBfCqjCAdqG6T0Wv7Sk6MllhUsaglwexVCbTLklDHw&oe=6669FE53" },
    // { id: '39', nombre: 'Andrea Nuñez', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/376784291_10229346334070468_329149336454632774_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v9oKV_ffO1MQ7kNvgEGy84m&_nc_ht=scontent-cph2-1.xx&oh=00_AYDE_pnxVK-xKM1dT3rE9jKv-9e_lMfjOtPCzq--xxPJDw&oe=66487FB7" },
    // { id: '40', nombre: 'Maria Ubeda', puntis: 0, ganador: 0, posicion: null, imagen: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/52057098_2263112900625120_1840603072150110208_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9o111TO7fSkQ7kNvgF6BOa_&_nc_ht=scontent-cph2-1.xx&oh=00_AYAf6s7KnQPRRUXHhbau9G1OKLgDLzy6vmyykhRQRB20Qw&oe=666A29F6" },
    // { id: '41', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    // { id: '42', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    // { id: '43', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    // { id: '44', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    // { id: '45', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
    // { id: '46', nombre: '', puntis: 0, ganador: 0, posicion: null, imagen: "" },
   //];


  constructor() { }

  private firestore: Firestore = inject(Firestore);

  getCollectionData(): Observable<Usuario[]> {
    const collectionRef: CollectionReference = collection(this.firestore, "participantes");
    return collectionData(collectionRef, { idField: 'id' })  as Observable<Usuario[]>;
  }

  public getUsuarios():Usuario[] {
    this.getCollectionData().subscribe(data => {
      data.forEach(item => {
        // Procesa cada elemento aquí
        console.log('abcd'+String(item));
        console.log('abcd'+item.nombre);
        this.usuarios.push(item);
      });
    });;
    return this.usuarios;
  }

}
