import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../services/track.service';
import { TrackInterface } from '../../../interfaces/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  trackList: TrackInterface[] = [];
  errorMsg: string;

  constructor(private trackService: TrackService) {
    this.trackList = this.getLocalTrack();
  }

  ngOnInit() {
    this.getTrack();
  }

  public getTrack(): void {
    this.trackService.getDataTrack().subscribe(
      res => {
        if (res) {
          this.trackList.push(res);
        }
      },
      err => this.errorMsg = err
    );
    this.setLocalTrack(this.trackList);
  }

  public removeTrack(id: number) {
    this.trackList.splice(id, 1);
    this.setLocalTrack(this.trackList);
  }

  private setLocalTrack(data: TrackInterface[]): void {
    localStorage.setItem('trackList', JSON.stringify(data));
  }

  private getLocalTrack(): TrackInterface[] {
    return localStorage.getItem('trackList') != null ? JSON.parse(localStorage.getItem('trackList')) : [];
  }

  private clearLocal(): void {
    localStorage.clear();
  }

}
