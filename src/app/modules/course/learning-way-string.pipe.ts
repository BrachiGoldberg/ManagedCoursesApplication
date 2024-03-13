import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'learningWayString',
  standalone: true
})
export class LearningWayStringPipe implements PipeTransform {

  transform(number: number): string {
    if (number == 0)
      return "Frontal";
    else
      return "Zoom"
  }

}
