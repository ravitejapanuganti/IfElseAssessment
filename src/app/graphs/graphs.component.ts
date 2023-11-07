import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptionsLine: Highcharts.Options = {
    series: [{
      name:'Sales Statistics',
      data: [0, 1.5, 0.5, 2.6, 10.5, 30, 20.5],
      type: 'spline',
      color: '#506de2',
      shadow:true,
    }],
    title:{
      text:'Sales Statistics'
    },
    yAxis: {
      categories: ['10$', '20$', '30$', '40$', '50$']
    },
    xAxis: {
      categories: ['Sun', 'Mon', 'Tus', 'Wed', 'Ths', 'Fri', 'Sat']
    },
    tooltip: {
      format: '{x}:{y}'
    },
  };
  myOptions:any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Balance Overview'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      min: 0
    },
    legend: {
      reversed: false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Income',
      data: [200, 100, 300, 500, 200, 100, 500, 900, 130, 180, 560, 990]
    }, {
      name: 'Borrow',
      data: [140, 240, 400, 220, 190,140,340,260,180,120,480,230]
    }]
  };

  chartOptionsPie: Highcharts.Options = {
    series: [{
      name:'Top Products',
      data: [
        { name: 'Men', y: 320 },
        { name: 'Electronics', y: 580 },
        { name: 'Women', y: 220 }
      ],
      type: 'pie',
      color: '#506de2',
      size: '50%',
      innerSize: '70%'
    }],
    title:{
      text:'Top Products'
    },
    xAxis: {
      categories: ['Men', 'Electronics', 'Women']
    },
    tooltip: {
      format: '{y}'
    },
    legend: {
      floating: true,
      align: 'left',
      layout: 'horizontal',
      verticalAlign: 'bottom',
      width: 300,
      x: 100,
      y: 0
  },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: false
        },
        showInLegend: true
    }
    },
    colors: ['#506de2', '#606de2c9', '#758ce8bf']
  };
  chartCallback: Highcharts.ChartCallbackFunction = function () { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
}