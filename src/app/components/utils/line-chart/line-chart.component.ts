import { Component, OnInit } from '@angular/core';
import {TrackService} from '../../../services/track.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartData: Array<any> = [];
  public onReady = false;

  constructor(private trackService: TrackService) {
    const currentList: Array<any> = [];
    const standardList: Array<any> = [];
    this.trackService.getTracks().subscribe(res => {
      for (const i in res) {
        currentList.push(res[i].current);
        standardList.push(res[i].standard);
        this.lineChartLabels.push(res[i].name);
      }

      this.lineChartData = [
        {data: currentList, label: 'Current'},
        {data: standardList, label: 'Standard'},
      ];
      this.onReady = true;
    });
  }

  ngOnInit() { }
}
