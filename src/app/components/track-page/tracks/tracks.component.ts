import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../services/track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  objTracks: any;
  loading = true;

  constructor(private trackService: TrackService) {
    this.trackService.getTracks().subscribe(res => {
      this.objTracks = res;
      this.loading =  false;
    });
  }

  ngOnInit() { }

  public removeTrack(id: string) {
    this.trackService.deleteTrack(id).subscribe(
      res => {
        if (!res) {
          delete this.objTracks[id];
        } else {
          console.error('Error al eliminar un objeto');
        }
      },
      error => console.log(error)
    );
  }
}
