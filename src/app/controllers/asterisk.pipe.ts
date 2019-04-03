import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterisk'
})
export class AsteriskPipe implements PipeTransform {

  transform(output: string, args?: any): string {

    // let starsCount = 0;
    let outputStr = '';
    let out: number;

    for ( out = Number(output);  ( out % args.divider === 0);  out++) {

      outputStr = outputStr + '*';
    }
    return outputStr;
  }
}
