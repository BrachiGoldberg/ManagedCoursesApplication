import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showLearningWayIcon',
  standalone: true
})
export class ShowLearningWayIconPipe implements PipeTransform {

  transform(learningWay: number): string {
    if(learningWay == 0)
      return "supervisor_account";
    else
    return "desktop_windows";
  }

}
