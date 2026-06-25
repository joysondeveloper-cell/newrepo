import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validate',
})
export class ValidatePipe implements PipeTransform {


  transform(value:any): any {
    return value == 1 ? 'Active' : 'InActive'
  }
}
