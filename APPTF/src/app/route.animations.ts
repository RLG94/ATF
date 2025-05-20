
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';

export const fader = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      opacity: 0,
      // Evitamos movimiento horizontal
    }), { optional: true }),

    group([
      query(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('300ms ease', style({ opacity: 0, transform: 'translateY(-100%)' }))
      ], { optional: true }),

      query(':enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('300ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true })
    ])
  ])
]);