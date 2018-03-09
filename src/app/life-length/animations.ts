import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

export const bumpEnterAnimation = trigger(
  'bumpEnterAnimation', [
    transition(':enter', [
      animate(750, keyframes([
        style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
        style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
        style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 }),
        style({ opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
        style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
        style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }),
      ]))]),
  ],
);
