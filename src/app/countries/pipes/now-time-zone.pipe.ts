import { DatePipe, } from '@angular/common';
import { LOCALE_ID, Pipe, PipeTransform, Inject } from '@angular/core';

@Pipe({
  name: 'nowTimeZone'
})
export class NowTimeZonePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) { }
  transform(now: any, timezone: any) {
    if (!now) return null;

    if (typeof timezone !== 'string') {
      console.error('El argumento de zona horaria no es una cadena válida');
      return null;
    }

    const datePipe = new DatePipe(this.locale);
    return datePipe.transform(now, 'long', timezone);
  }
}
