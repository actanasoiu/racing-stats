import { Driver } from './../models/f1-standings.dto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'driver'
})
export class DriverPipe implements PipeTransform {

  transform(driver: Driver, ...args: any[]): any {
    return `${driver.givenName} ${driver.familyName}`;
  }

}
