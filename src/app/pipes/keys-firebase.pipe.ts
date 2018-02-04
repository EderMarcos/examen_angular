import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysFirebase',
  pure: false
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
