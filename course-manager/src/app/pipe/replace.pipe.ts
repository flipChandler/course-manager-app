import { Pipe, PipeTransform } from '@angular/core';

// elegível para ser um pipe
@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  // pipe para substituir qualquer coisa
  transform(value: string, char: string, valueToReplace: string) {
    return value.replace(char, valueToReplace);
  }
}
