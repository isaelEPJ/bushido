import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipePipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): string {
    let finalValue = value + '';

    finalValue = finalValue
      .padStart(11, '0') // item 1
      .substr(0, 11) // item 2
      .replace(/[^0-9]/, '') // item 3
      .replace(
        // item 4
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
      );

    return finalValue;
  }
}
