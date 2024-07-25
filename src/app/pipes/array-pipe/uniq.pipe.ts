import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniq',
  standalone: true,
})
export class UniqPipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input) && !isDeepObject(input)) {
      return input;
    }

    if (isDeepObject(input)) {
      const unwrappedInput = unwrapDeep(input);
      if (!isArray(unwrappedInput)) {
        return unwrappedInput;
      }

      return unwrappedInput.filter(
        (value: any, index: number) =>
          deepIndexOf(unwrappedInput, value) === index
      );
    }

    return input.filter(
      (value: any, index: number) => input.indexOf(value) === index
    );
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isDeepObject(object: any) {
  return object.__isDeepObject__;
}

export function unwrapDeep(object: any) {
  if (isDeepObject(object)) {
    return object.data;
  }
  return object;
}

export function deepIndexOf(collection: any[], value: any) {
  let index = -1;
  const length = collection.length;
  while (++index < length) {
    if (deepEqual(value, collection[index])) {
      return index;
    }
  }
  return -1;
}

export function deepEqual(a: any, b: any) {
  if (a === b) {
    return true;
  }
  if (!(typeof a === 'object' && typeof b === 'object')) {
    return a === b;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) {
    return false;
  }
  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!hasOwn.call(b, keysA[i]) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
