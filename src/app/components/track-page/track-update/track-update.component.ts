import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TrackInterface} from '../../../interfaces/track';
import {Router} from '@angular/router';
import {TrackService} from '../../../services/track.service';

@Component({
  selector: 'app-track-update',
  templateUrl: './track-update.component.html',
  styleUrls: ['./track-update.component.css']
})
export class TrackUpdateComponent implements OnInit {

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
    this.form.setValue(this.trackObject);
  }

  ngOnInit() { }

  public updateTrack(): void {
    console.log(this.trackObject);
  }
}
