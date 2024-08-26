import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldMapComponent } from './world-map/world-map.component';
import { EuropeMapComponent } from './europe-map/europe-map.component';
import { LegendMapComponent } from './legend-map/legend-map.component';
import { EuropeSvgComponent } from './europe-map/europe-svg/europe-svg.component';
import { TableRowComponent } from './legend-map/table-row/table-row.component';
import { MapSvgComponent } from './world-map/map-svg/map-svg.component';

@NgModule({
  declarations: [
    WorldMapComponent,
    MapSvgComponent,
    EuropeMapComponent,
    LegendMapComponent,
    EuropeSvgComponent,
    TableRowComponent,
    MapSvgComponent,
  ],
  imports: [CommonModule],
  exports: [WorldMapComponent, LegendMapComponent, EuropeMapComponent],
})
export class MapsModule {}
