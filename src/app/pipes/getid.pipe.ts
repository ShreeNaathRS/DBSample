import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getid'
})
export class GetidPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;
  }

}
