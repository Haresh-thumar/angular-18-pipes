import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffleArray',
  standalone: true,
})
export class ShuffleArrayPipe implements PipeTransform {
  transform(array: any[]): any[] {
    if (!Array.isArray(array)) return array;
    const copy = array.slice();
    let currentIndex = copy.length,
      randomIndex,
      temporaryValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = copy[currentIndex];
      copy[currentIndex] = copy[randomIndex];
      copy[randomIndex] = temporaryValue;
    }
    return copy;
  }
}
