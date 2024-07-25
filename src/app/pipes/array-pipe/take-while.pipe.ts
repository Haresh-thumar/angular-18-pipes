import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'takeWhile',
  standalone: true,
})
export class TakeWhilePipe implements PipeTransform {
  transform(input: any, predicate?: CollectionPredicate): any {
    if (!isArray(input) || isNil(predicate)) {
      return input;
    }

    return takeWhile(input, predicate);
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function takeWhile(input: any[], predicate: CollectionPredicate) {
  return takeUntil(
    input,
    (item: any, index: number, collection: any[]) =>
      !predicate(item, index, collection)
  );
}

export function takeUntil(input: any[], predicate: CollectionPredicate) {
  let i = -1;
  const result: any = [];
  while (++i < input.length && !predicate(input[i], i, input)) {
    result[i] = input[i];
  }
  return result;
}

export function isNil(value: any): value is null | undefined {
  return value === null || typeof value === 'undefined';
}

export type CollectionPredicate = (
  item: any,
  index: number,
  collection: any[]
) => boolean;
