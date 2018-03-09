import { Component, OnInit } from '@angular/core';
import { months } from './months';
import {
  SIZE_OF_INTERVAL,
  SizeOfInterval,
  Interval,
} from './interval';

const MSECS_IN_DAY = 60 * 60 * 24 * 1000;
const MSECS_IN_YEAR = 60 * 60 * 24 * 365 * 1000;
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const milsecondsInInterval = {};
milsecondsInInterval[SIZE_OF_INTERVAL.day] = MSECS_IN_DAY;
milsecondsInInterval[SIZE_OF_INTERVAL.week] = milsecondsInInterval[SIZE_OF_INTERVAL.day] * DAYS_IN_WEEK;
milsecondsInInterval[SIZE_OF_INTERVAL.month] = milsecondsInInterval[SIZE_OF_INTERVAL.day] * DAYS_IN_MONTH;

@Component({
  selector: 'app-life-length',
  templateUrl: './life-length.component.html',
  styleUrls: ['./life-length.component.scss'],
})
export class LifeLengthComponent implements OnInit {
  bornDay: number;
  bornMonth = 0;
  bornYear: number;
  bornDate: Date;

  now: Date = new Date();
  plainLifeLength = 75;
  plainEnd: Date;

  months: string[] = months;
  sizeOfInterval = SizeOfInterval;
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

  onBornChange() {
    if (this.bornMonth) {
      this.bornMonth = Number(this.bornMonth);
    }

    if (this.bornDay && this.bornYear) {
      this.bornDate = new Date(this.bornYear, this.bornMonth, this.bornDay);
      this.calculateTime();
    }
  }

  calculateTime(): void {
    const msecInInterval = milsecondsInInterval[this.intervalSize];

    this.plainEnd = this.bornDate
      ? new Date(
        this.bornDate.getFullYear() + this.plainLifeLength,
        this.bornDate.getMonth(),
        this.bornDate.getDate(),
      )
      : null;

    this.full = Math.round(
      (this.plainLifeLength * MSECS_IN_YEAR) / msecInInterval);
    this.done = this.bornDate
      ? Math.round(
        (this.now.getTime() - this.bornDate.getTime()) / msecInInterval)
      : 0;
    this.left = this.plainEnd
      ? Math.round(
        (this.plainEnd.getTime() - this.now.getTime()) / msecInInterval)
      : this.full;

    // tslint:disable-next-line prefer-array-literal
    this.iterateArray = new Array(this.full).fill('').map((_, index) => new Interval(
      index, // id
      this.intervalSize, // size
      this.bornDate
        ? this.bornDate.getTime() + ((index + 1) * msecInInterval) <= this.now.getTime() // filled
        : false,
    ));
  }

  trackByIntervals(index: number, interval: Interval): number {
    return interval.id;
  }
}
