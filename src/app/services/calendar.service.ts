import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@angular/fire/storage';
import { doc, docData, Firestore } from '@angular/fire/firestore';

@Injectable()
export class CalendarService {
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private firestore: Firestore
  ) {}

  getTodaysEvents(): Observable<any> {
    return docData(doc(this.firestore, 'location/SRqCUHtn24LDAt28uQvN')).pipe(
      map((loc: any) =>
        this.getCurrentEvents(this.parseICalendar(loc.location))
      ),
      map((item: any) => (item ? item[0].summary : 'Kraków, Poland'))
    );
  }

  getCurrentEvents(calendar: any) {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0].replace(/-/g, '');

    return calendar.events.filter((event: any) => {
      const startDate = event.dtstart;
      const endDate = event.dtend;
      return todayString >= startDate && todayString < endDate;
    });
  }

  parseICalendar(icalData: string): any {
    const lines = icalData.split(' ');
    const calendar: any = {
      prodid: '',
      version: '',
      calscale: '',
      method: '',
      name: '',
      timezone: '',
      events: [],
    };
    let currentEvent: any = null;
    let currentAlarm: any = null;

    for (let line of lines) {
      line = line.trim();
      const [key, ...values] = line.split(':');
      const value = values.join(':'); // Rejoin in case there were colons in the value

      switch (key) {
        case 'BEGIN':
          if (value === 'VEVENT') {
            currentEvent = {};
          } else if (value === 'VALARM') {
            currentAlarm = {};
          }
          break;
        case 'END':
          if (value === 'VEVENT' && currentEvent) {
            calendar.events!.push(currentEvent as any);
            currentEvent = null;
          } else if (value === 'VALARM' && currentAlarm && currentEvent) {
            if (!currentEvent.valarm) {
              currentEvent.valarm = [];
            }
            currentEvent.valarm.push(currentAlarm as any);
            currentAlarm = null;
          }
          break;
        default:
          if (currentEvent) {
            if (currentAlarm) {
              const alarmKey = key.toLowerCase();
              (currentAlarm as any)[alarmKey] = value;
            } else {
              const [mainKey] = key.split(';');
              const eventKey = mainKey.toLowerCase();
              if (eventKey === 'dtstart' || eventKey === 'dtend') {
                (currentEvent as any)[eventKey] = value;
              } else if (eventKey === 'last-modified') {
                currentEvent.lastModified = value;
              } else {
                (currentEvent as any)[eventKey] = value;
              }
            }
          } else {
            const calendarKey = key.toLowerCase().replace(/-/g, '');
            (calendar as any)[calendarKey] = value;
          }
      }
    }

    return calendar;
  }
}
