import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { LogrosComponent } from '../../logros/logros.component';

@Component({
  selector: 'app-olimpiadas',
  standalone: true,
  imports: [LogrosComponent,RouterModule,RouterOutlet],
  templateUrl: './olimpiadas.component.html',
  styleUrl: './olimpiadas.component.scss'
})
export class OlimpiadasComponent {

}
