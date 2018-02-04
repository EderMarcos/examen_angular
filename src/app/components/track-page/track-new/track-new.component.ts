import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../services/track.service';
import { TrackInterface } from '../../../interfaces/track';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-track-new',
  templateUrl: './track-new.component.html',
  styleUrls: ['./track-new.component.css']
})
export class TrackNewComponent implements OnInit {

  public form: FormGroup;
  public trackObject: TrackInterface = {
    name: null,
    date: null,
    current: null,
    standard: null,
    hb: null,
    kpi1: null,
    kpi2: null,
  };

  constructor(
    private trackService: TrackService,
    private router: Router
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

  ngOnInit() { }

  public addTrack(): void {
    this.trackService.setDataTrack(this.trackObject);
    this.router.navigateByUrl('/dashboard/tracks');
  }

  public save(): void {
    console.log(this.trackObject);
    console.log(this.form);
  }
}
