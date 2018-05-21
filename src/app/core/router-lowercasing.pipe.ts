import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routerLowercasing'
})
export class RouterLowercasingPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ').map( word => {
      return word.charAt(0).toLowerCase() + word.slice(1);
    }).join('-');
  }

}
