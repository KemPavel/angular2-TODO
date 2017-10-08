import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDuration'
})

export class ConvertDurationPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.trunc(value / 60);
    const mins = value - hours * 60;
    return hours ? `${hours}h ${mins}min` : `${mins}min`;
  }
}
