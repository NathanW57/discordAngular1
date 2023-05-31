import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updateUser'
})
export class UpdateUserPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      if (value.startsWith('ROLE_')) {
        return value.substring(5);
      }
    }
    return value;
  }

}
