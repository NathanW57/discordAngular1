import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updateUser'
})
export class UpdateUserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
