import { Component, OnInit } from '@angular/core';
import { Fast } from 'src/app/models/fast.model';
import { HttpHeaders } from '@angular/common/http/';
import { Router, ActivatedRoute } from '@angular/router';
import { FastService } from 'src/app/services/fast.service';
import { NgModel } from '@angular/forms';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';
// import { MatSlider } from '@angular/material/slider';
// import CanvasJS from 'canvasjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {




  // ctors
  constructor(private fastSVC: FastService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) {

  }


  // F I E L D S
  barChartOptions: ChartOptions = { responsive: true };
  datePipeString: string;
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [];


  selected = null;
  editSelected = false;
  newFast: Fast = new Fast();
  fasts: Fast[] = [];
  title = 'ngFast';
  editFast = null;
  fast = null;
  showComplete = false;
  currentRoute: any;
  urlId: number;
  averageDuration = 0;
  sumDuration = 0;




  public chartColors: Array<any> = [
    {


      backgroundColor: [
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)'
      ],
      hoverBackgroundColor: 'rgba(54, 162, 235, .2)',
      borderColor: 'rgba(54, 162, 235, 0.7)',
      hoverBorderColor: 'rgba(54, 162, 235, .2)',
      borderWidth: 0,
    }
  ];


  show_value(x): number {
    // document.getElementById("slider_value").innerHTML = x;

    return document.getElementById('slider_value').innerHTML = x;
  }








  monthIndex = null;
  // monthString = null;
  month = null;
  arr = null;





  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };

  // getTheMonth(): string {
  //   this.arr = this.fast.date.split('-');

  //   this.month = ['January', 'February', 'March', 'April', 'May', 'June',
  //     'July', 'August', 'September', 'October', 'November', 'December'];

  //   this.monthIndex = parseInt(this.arr[1], 10) - 1;

  //   console.log(this.monthIndex);
  //   console.log(this.month[this.monthIndex]);

  //   return 'january';
  // }

  // // methods
  ngOnInit() {
    console.log('In init');

    this.reload();
    this.loadGraph();

  }

  getNumFasts = function () {

    return this.fasts.length;
  };

  displayFast(todo) {

    this.selected = true;
  }


  displayTable(todo) {

    this.selected = false;
  }

  displayEditFast() {

    this.editSelected = true;
  }

  addFast(newFast: NgModel) {
    console.log('in add fast ID ' + this.newFast.id);
    console.log('in add fast DATE ' + this.newFast.date);
    console.log('in add fast LENGTH ' + this.newFast.length);

    this.fastSVC.create(this.newFast).subscribe(
      data => {
        this.reload();
        this.selected = data;
        this.newFast = null;

      },
      err => console.log('AddFast got an error: ' + err)
    );
    this.reload();
  }


  setEditFast() {

    this.editFast = Object.assign({}, this.selected);


  }
  updateFast(fast: Fast) {

    console.log('in update comp ' + fast.id + '  ' + fast.date);

    this.fastSVC.update(fast).subscribe(
      data => {
        this.reload();
        this.selected = data;
        this.fast = null;

      },
      err => console.log('Update got an error: ' + err)
    );

  }

  deleteFast(id: number) {
    console.log(id);
    this.fastSVC.delete(id).subscribe(
      newTodo => {
        this.reload();

      },
      err => console.log('Delete got an error: ' + err)
    );

  }


  reload() {
    this.fastSVC.index().subscribe(
      data => {
        this.fasts = data;
      },
      (err) => {
        console.log(err);
      }
    );


  }

  loadGraph() {
    this.averageDuration = 0;
    this.sumDuration = 0;
    console.log("array length " + this.fasts.length);
    this.fastSVC.index().subscribe(
      data => {


          for (let i = this.fasts.length -5; i < this.fasts.length; i++) {

            this.sumDuration = this.sumDuration + this.fasts[i].length;
            console.log(" workout length" + this.fasts[i].length);
            console.log("sum duration " + this.sumDuration);



            this.barChartLabels = [
              // this.datePipe.transform(this.fasts[this.fasts.length -6].date, 'EEEE'),
              this.datePipe.transform(this.fasts[this.fasts.length - 5].date, 'EEEE'),
              this.datePipe.transform(this.fasts[this.fasts.length - 4].date, 'EEEE'),
              this.datePipe.transform(this.fasts[this.fasts.length - 3].date, 'EEEE'),
              this.datePipe.transform(this.fasts[this.fasts.length - 2].date, 'EEEE'),
              this.datePipe.transform(this.fasts[this.fasts.length - 1].date, 'EEEE')],
              // this.datePipe.transform(this.fasts[6].date, 'EEEE')],
              this.barChartData = [
                {
                  data: [
                    // this.fasts[this.fasts.length-1].length,
                    this.fasts[this.fasts.length - 5].length,
                    this.fasts[this.fasts.length - 4].length,
                    this.fasts[this.fasts.length - 3].length,
                    this.fasts[this.fasts.length - 2].length,
                    this.fasts[this.fasts.length - 1].length],
                  // this.fasts[6].length],
                  label: '7 Day Summary'
                }
              ];
          }

          data.forEach(e => {


        });
        this.averageDuration = (this.sumDuration / 5) / 60;
        this.reload();
        this.selected = data;
        this.fast = null;
      },
      err => console.log('Update got an error: ' + err)
    );
  }
}
