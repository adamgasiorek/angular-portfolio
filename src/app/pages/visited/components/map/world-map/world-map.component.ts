import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, Inject,
  Input,
  OnDestroy,
  OnInit, PLATFORM_ID,
  Renderer2,
  ViewChild
} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-world-map',
  template: `
    <app-map-svg
      *ngIf="isPlatformBrowser"
      [list]="list">
    </app-map-svg>
  `
})
export class WorldMapComponent {
  @Input() list: string = '';
  isPlatformBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isPlatformBrowser = isPlatformBrowser(platformId);
  }

}
