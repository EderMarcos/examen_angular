import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TrackInterface } from '../interfaces/track';

@Injectable()
export class TrackService {

  private dataTrack:  Observable<TrackInterface>;

  constructor() {
    this.dataTrack = new Observable<TrackInterface>(observer => {
      observer.next({
        name: 'Track 1',
        date: new Date(),
        current: 14.56,
        standard: 15,
        hb: 1,
        kpi1: 1.2,
        kpi2: 0.001,
      });
      observer.complete();
    });
  }

  public setDataTrack(track: TrackInterface): void {
    this.dataTrack = new Observable<TrackInterface>(observer => {
      observer.next(track);
      observer.complete();
    });
  }

  public getDataTrack(): Observable<TrackInterface> {
    return this.dataTrack;
  }

}
