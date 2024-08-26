import { Injectable } from '@angular/core';
import { home } from '../content/home';

@Injectable()
export class CmsService {
  getHomeData(): any[] {
    return home;
  }
}
