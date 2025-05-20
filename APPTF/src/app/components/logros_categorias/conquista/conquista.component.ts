import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { LogrosComponent } from '../../logros/logros.component';
@Component({
  selector: 'app-conquista',
  standalone: true,
  imports: [LogrosComponent,RouterModule,RouterOutlet],
  templateUrl: './conquista.component.html',
  styleUrl: './conquista.component.scss'
})
export class ConquistaComponent {

}
