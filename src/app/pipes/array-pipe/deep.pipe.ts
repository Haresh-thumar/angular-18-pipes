import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deep',
  standalone: true,
})
export class DeepPipe implements PipeTransform {
  transform(value: any): any {
    if (isDeepObject(value)) {
      return value;
    }

    return wrapDeep(value);
  }
}

export function isDeepObject(object: any) {
  return object.__isDeepObject__;
}

export function wrapDeep(object: any) {
  return new DeepWrapper(object);
}

export class DeepWrapper {
  public __isDeepObject__: boolean = true;

  constructor(public data: any) {}
}
