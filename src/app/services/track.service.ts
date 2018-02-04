import { Injectable } from '@angular/core';
import { TrackInterface } from '../interfaces/track';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrackService {

  private apiFirebase = 'https://mtech-34a4b.firebaseio.com/tracks';
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
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
    console.log('delete');
    return this.http
      .delete(`${ this.apiFirebase }/${ key$ }.json`, { headers: this.headers })
      .map(res => res);
  }

}
