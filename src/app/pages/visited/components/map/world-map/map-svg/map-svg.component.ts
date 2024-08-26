import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-map-svg',
  templateUrl: './map-svg.component.html',
  styleUrls: ['./map-svg.component.scss']
})
export class MapSvgComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') mapRef: any;
  showTooltip = false;
  tooltipPositionLeft = 0;
  tooltipPositionTop = 0;

  country = '';
  countryCode = '';
  alerts = 0;
  activeColor = '#03A9F4';
  defaultColor = '#ECEFF1';
  prevColor = this.defaultColor;

  @Input() list: any;
  @Input() loading: any = false;

  private listenerFn: any;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const listmapped = this.list.replace(/[\[\]']+/g, '').split(',');
    this.fillCountries([...this.mapRef.nativeElement.children], listmapped);
  }

  showTooltipPos(event: any): void {
    this.country = event.target.getAttribute('name');
    this.countryCode = event.target.getAttribute('id');
    this.alerts = parseInt(
      this.list.find((item: any) => item.country === this.countryCode)
        ?.alertsCount,
      10
    );
    this.showTooltip = true;
    this.tooltipPositionLeft = event.offsetX;
    this.tooltipPositionTop = event.offsetY + 10;
    this.cdr.detectChanges();
  }

  fillCountries(countriesEl: Array<any>, values: Array<any>): void {
    if (values) {
      values.forEach((item) => {
        this.paintCountry(countriesEl, item, '#607D8B');
      });
    }
  }

  paintCountry(countriesEl: Array<any>, code: string, color: string): void {
    countriesEl
      .filter((element) => element.getAttribute('id') === code)
      .forEach((country) => {
        country.setAttribute('fill', color);
      });
  }

  ngOnDestroy(): void {
    if (this.listenerFn) {
      this.listenerFn();
    }
  }

}
