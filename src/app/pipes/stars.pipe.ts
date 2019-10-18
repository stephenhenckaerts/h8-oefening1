import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: string): string {
    let stars = '';
    for(var i = 0; i < parseInt(value); i++){
      stars += '*';
    }
    return stars;
  }

}
