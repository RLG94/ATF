import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { LogrosComponent } from '../../logros/logros.component';

@Component({
  selector: 'app-inspiracion',
  standalone: true,
  imports: [LogrosComponent,RouterModule,RouterOutlet],
  templateUrl: './inspiracion.component.html',
  styleUrl: './inspiracion.component.scss'
})
export class InspiracionComponent {

}
