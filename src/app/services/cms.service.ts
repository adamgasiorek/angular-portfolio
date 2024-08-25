import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { content } from '../content/content';

@Injectable()
export class CmsService {
  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return of(content);
  }
}
