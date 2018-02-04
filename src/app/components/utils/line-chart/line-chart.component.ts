import { Component, OnInit } from '@angular/core';
import {TrackService} from '../../../services/track.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartLabels: Array<any> = ['Current', 'Standard', 'HB', 'Kpi1', 'Kpi2'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartData: Array<any> = [];
  public onReady = false;

  constructor(private trackService: TrackService) {
    this.trackService.getTracks().subscribe(res => {
      for (const i in res) {
        this.lineChartData.push({ data: [
          res[i].current,
          res[i].standard,
          res[i].hb,
          res[i].kpi1,
          res[i].kpi2,
        ], label: res[i].name });
      }
      this.onReady = true;
    });
  }

  ngOnInit() { }
}
