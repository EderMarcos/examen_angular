import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../services/track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  objTracks: any;
  errorMsg: string;

  constructor(private trackService: TrackService) {
    this.trackService.getTracks().subscribe(res => {
      this.objTracks = res;
      console.log('objTracks', this.objTracks);
    });
  }

  ngOnInit() { }

  public removeTrack(id: string) {
    this.trackService.deleteTrack(id);
  }
}
