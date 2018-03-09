import { Component, OnInit } from '@angular/core';
import {
  SIZE_OF_INTERVAL,
  SizeOfInterval,
  Interval,
} from './interval';

const milsecondsInInterval = {};
milsecondsInInterval[SIZE_OF_INTERVAL.day] = 60 * 60 * 24 * 1000;
milsecondsInInterval[SIZE_OF_INTERVAL.week] = milsecondsInInterval[SIZE_OF_INTERVAL.day] * 7;
milsecondsInInterval[SIZE_OF_INTERVAL.month] = milsecondsInInterval[SIZE_OF_INTERVAL.day] * 30;

@Component({
  selector: 'app-life-length',
  templateUrl: './life-length.component.html',
  styleUrls: ['./life-length.component.scss'],
})
export class LifeLengthComponent implements OnInit {
  bornDate: Date = new Date(1983, 2, 27);
  now: Date = new Date();
  plainLifeLength = 75;
  plainEnd: Date;

  intervalSize: SIZE_OF_INTERVAL = SIZE_OF_INTERVAL.week;
  intervalSizes = Object.keys(SizeOfInterval)
    .map(key => ({
      key,
      value: SizeOfInterval[key],
    }));

  iterateArray: Interval[] = [];

  full: number;
  done: number;
  left: number;

  constructor() { }

  ngOnInit() {
    this.calculateTime();
  }

  onPlainLifeLengthChange($event) {
    this.plainLifeLength = $event;
    this.calculateTime();
  }

  onIntervalSizeChange($event) {
    this.intervalSize = Number($event);
    this.calculateTime();
  }

  calculateTime(): void {
    this.plainEnd = new Date(
      this.bornDate.getFullYear() + this.plainLifeLength,
      this.bornDate.getMonth(),
      this.bornDate.getDate(),
    );

    this.full = Math.round(
      (this.plainEnd.getTime() - this.bornDate.getTime()) / milsecondsInInterval[this.intervalSize]);
    this.done = Math.round(
      (this.now.getTime() - this.bornDate.getTime()) / milsecondsInInterval[this.intervalSize]);
    this.left = Math.round(
      (this.plainEnd.getTime() - this.now.getTime()) / milsecondsInInterval[this.intervalSize]);

    // tslint:disable-next-line prefer-array-literal
    this.iterateArray = new Array(this.full).fill('').map((_, index) => new Interval(
      index,
      this.intervalSize,
      this.bornDate.getTime() + ((index + 1) * milsecondsInInterval[this.intervalSize]) <= this.now.getTime(),
    ));
  }

  trackByIntervals(index: number, interval: Interval): number {
    return interval.id;
  }
}
