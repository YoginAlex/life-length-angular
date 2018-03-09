export enum SIZE_OF_INTERVAL {
  day,
  week,
  month,
}

export enum TYPE_OF_INTERVAL {
  childhood,
  school,
  college,
  now,
}

export interface IInterface {
  id: number;
  size: SIZE_OF_INTERVAL;
  filled: boolean;
  type?: TYPE_OF_INTERVAL;
}

export const SizeOfInterval = {
  [SIZE_OF_INTERVAL.day]: 'days',
  [SIZE_OF_INTERVAL.week]: 'weeks',
  [SIZE_OF_INTERVAL.month]: 'months',
};

export class Interval implements IInterface {
  id: number;
  size: SIZE_OF_INTERVAL;
  filled: boolean;
  type?: TYPE_OF_INTERVAL;

  constructor(
    id: number,
    size = SIZE_OF_INTERVAL.week,
    filled = false,
    type?: TYPE_OF_INTERVAL,
  ) {
    this.id = id;
    this.size = size;
    this.filled = filled;
    this.type = type;
  }
}
