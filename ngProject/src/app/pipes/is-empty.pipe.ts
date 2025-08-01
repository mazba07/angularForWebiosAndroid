import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {

  transform(value: any) {
    if ((!!value) && (value.constructor === Array)) {
      if (value.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if ((!!value) && (value.constructor === Object)) {
      if (Object.keys(value).length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
