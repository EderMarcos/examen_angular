import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackInterface } from '../../../interfaces/track';
import { TrackService } from '../../../services/track.service';

@Component({
  selector: 'app-track-update',
  templateUrl: './track-update.component.html',
  styleUrls: ['./track-update.component.css']
})
export class TrackUpdateComponent implements OnInit {

  public form: FormGroup;
  public trackObject: any = {
    name: null,
    date: null,
    current: null,
    standard: null,
    hb: null,
    kpi1: null,
    kpi2: null,
  };
  private id: string;

  constructor(
    private trackService: TrackService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'date': new FormControl(null, [Validators.required]),
      'current': new FormControl(null, [Validators.required]),
      'standard': new FormControl(null, [Validators.required]),
      'hb': new FormControl(null, [Validators.required]),
      'kpi1': new FormControl(null, [Validators.required]),
      'kpi2': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => this.id = res['id']);
    this.trackService.getTrack(this.id).subscribe(
      res => {
        this.trackObject = res;
        this.form.setValue(this.trackObject);
      },
      error => console.log(error)
    );
  }

  public updateTrack(): void {
    this.trackService.updateTrack(this.trackObject, this.id).subscribe(
      res => this.router.navigateByUrl('/dashboard/tracks'),
      error => console.log(error));
  }
}
