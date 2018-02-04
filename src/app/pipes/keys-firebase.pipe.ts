import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysFirebase'
})
export class KeysFirebasePipe implements PipeTransform {

  transform(value: any): any {
    const keys = [];
    for (const key in value) {
      keys.push(key);
    }
    return keys;
  }
}
