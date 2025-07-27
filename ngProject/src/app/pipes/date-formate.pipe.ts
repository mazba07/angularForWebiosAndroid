import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormate'
})
export class DateFormatePipe implements PipeTransform {

  transform(value: any): unknown {
    var date = new Date(value);
    var siteDateFormat = '';
    siteDateFormat = date.toDateString() + " " + date.toLocaleTimeString();
    return siteDateFormat;
  }

}
