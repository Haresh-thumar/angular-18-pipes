import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  standalone: true,
})
export class FlattenPipe implements PipeTransform {
  transform(input: any): any {
    const isDeep = isDeepObject(input);
    if (!isArray(input) && !isDeep) {
      return input;
    }

    if (isDeep) {
      const unwrapped = unwrapDeep(input);
      if (!isArray(unwrapped)) {
        return unwrapped;
      }

      return flatten(unwrapped, 0);
    }

    return [].concat.apply([], input);
  }
}

export function isDeepObject(object: any) {
  return object.__isDeepObject__;
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function flatten(input: any[], index: number = 0): any[] {
  if (index >= input.length) {
    return input;
  }
  if (isArray(input[index])) {
    return flatten(
      input.slice(0, index).concat(input[index], input.slice(index + 1)),
      index
    );
  }
  return flatten(input, index + 1);
}

export function unwrapDeep(object: any) {
  if (isDeepObject(object)) {
    return object.data;
  }
  return object;
}
