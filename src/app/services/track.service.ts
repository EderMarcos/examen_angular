import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TrackInterface } from '../interfaces/track';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrackService {

  private dataTrack:  Observable<TrackInterface>;
  private apiFirebase = 'https://mtech-34a4b.firebaseio.com/tracks';
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
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

  public newTrack(data: TrackInterface) {
    const body = JSON.stringify(data);
    return this.http
      .post(`${this.apiFirebase}.json`, body, { headers: this.headers })
      .map(res => res);
  }

  public updateTrack(data: TrackInterface, key$: string) {
    const body = JSON.stringify(data);
    return this.http
      .put(`${ this.apiFirebase }/${ key$ }.json`, body, { headers: this.headers })
      .map(res => res);
  }

  public getTrack(key$: string) {
    return this.http
      .get(`${ this.apiFirebase }/${ key$ }.json`, { headers: this.headers })
      .map(res => res);
  }

  public getTracks() {
    return this.http
      .get(`${ this.apiFirebase }.json`, { headers: this.headers })
      .map(res => res);
  }

  public deleteTrack(key$: string) {
    return this.http
      .delete(`${ this.apiFirebase }/${ key$ }.json`, { headers: this.headers })
      .map(res => res);
  }

}
