import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { LogrosComponent } from '../../logros/logros.component';

@Component({
  selector: 'app-desfase',
  standalone: true,
  imports: [LogrosComponent,RouterModule,RouterOutlet],
  templateUrl: './desfase.component.html',
  styleUrl: './desfase.component.scss'
})
export class DesfaseComponent {

}
