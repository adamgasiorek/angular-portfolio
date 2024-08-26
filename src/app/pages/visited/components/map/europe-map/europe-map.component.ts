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
  selector: 'app-europe-map',
  template: `
    <app-europe-svg
      *ngIf="isPlatformBrowser"
      [list]="list">
    </app-europe-svg>
  `
})
export class EuropeMapComponent {
  @Input() list: Array<string> = [];
  isPlatformBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isPlatformBrowser = isPlatformBrowser(platformId);
  }

}
