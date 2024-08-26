import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-row',
  template: `
    <section>
      <div class="wrapper">
        <h4 style="display: inline-flex;align-items: normal;">
          {{ title }}
          <ng-container *ngIf="nestedMap">
            <div (click)="openMap = !openMap" *ngIf="!openMap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="display:block;margin:auto;">
                <path d="M18 9l-6 6-6-6" />
              </svg>
            </div>
            <div (click)="openMap = !openMap" *ngIf="openMap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="display:block;margin:auto;">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </div>
          </ng-container>
        </h4>
        <div class="caption" *ngIf="subTitle">{{ subTitle }}</div>
      </div>
      <div class="values">
        <hr />
        <div class="headers">
          <div>
            <div class="body2" *ngIf="name">
              <b>{{ name }}</b>
            </div>
            <div class="overline" *ngIf="subName">{{ subName }}</div>
          </div>
          <div class="overline" *ngIf="date">{{ date }}</div>
        </div>
        <div class=" description">
          {{ description }}
        </div>
      </div>
    </section>

    <ng-container *ngIf="openMap">
      <ng-content></ng-content>
    </ng-container>
  `,
  styleUrls: ['table-row.component.css'],
})
export class TableRowComponent {
  @Input() title: any = '';
  @Input() subTitle: any = '';
  @Input() name: any = '';
  @Input() subName: any = '';
  @Input() date: any = '';
  @Input() description: any = '';
  @Input() nestedMap = false;
  openMap = false;
}
