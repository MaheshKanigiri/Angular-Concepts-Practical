import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom' // name that will be used in the template
})
export class CustomPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join(''); // custom logic for reversing the string
  }

}
