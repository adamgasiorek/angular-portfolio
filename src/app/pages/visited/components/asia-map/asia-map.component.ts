import { Component } from '@angular/core';
import { MapsModule } from '../map/maps.module';

@Component({
  selector: 'app-asia-map',
  standalone: true,
  imports: [MapsModule],
  templateUrl: './asia-map.component.html',
  styleUrl: './asia-map.component.scss',
})
export class AsiaMapComponent {
  listMap = [
    'PL',
    'SI',
    'TN',
    'UA',
    'AT',
    'BE',
    'BA',
    'HR',
    'CY',
    'CZ',
    'DK',
    'EG',
    'FR',
    'ES',
    'IL',
    'JO',
    'MT',
    'MC',
    'DE',
    'NO',
    'PT',
    'HU',
    'GB',
    'IT',
    'AE',
    'TR',
    'SK',
    'GR',
    'AD',
    'IN',
    'OM',
    'PH',
    'VN',
    'PH',
    'KH',
    'TH',
  ];
  list = this.listMap.join(',');
}
