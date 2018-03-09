import { Component, Input, OnChanges } from '@angular/core';
import { SIZE_OF_INTERVAL } from '../interval';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnChanges {
  @Input() filled: boolean;
  @Input() size: SIZE_OF_INTERVAL;
  @Input() index: number;

  currentClasses: {};

  constructor() { }

  ngOnChanges() {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    this.currentClasses = {
      filled: this.filled,
      day: this.size === SIZE_OF_INTERVAL.day,
      week: this.size === SIZE_OF_INTERVAL.week,
      month: this.size === SIZE_OF_INTERVAL.month,
    };
  }
}
