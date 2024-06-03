import { Component, Input } from '@angular/core';
import { countries } from '../countries';

@Component({
  selector: 'app-legend-map',
  templateUrl: './legend-map.component.html',
  styleUrls: ['./legend-map.component.scss'],
})
export class LegendMapComponent {
  @Input() list: any;
  data: any[] = countries;

  constructor() {}

  getCountryNameFromCode(code: string) {
    return this.data.find(item => item.code === code)['name'];
  }

  getCountriesContinentFromCode(list: any, code: string) {
    const listmapped = list.replace(/[\[\]']+/g, '').split(',');
    const arr = this.data
      .filter(item => item.continent === code)
      .map(item => item.code);

    return listmapped.filter((item: any) => arr.includes(item));
  }

  getAllCountriesPerContinent(continent: string) {
    return this.getCountriesContinentFromCode(this.list, continent).map(
      (item: any) => ' ' + this.getCountryNameFromCode(item)
    );
  }
}
