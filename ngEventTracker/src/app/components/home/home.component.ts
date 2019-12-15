import { Component, OnInit } from '@angular/core';
import { Fast } from 'src/app/models/fast.model';
import { HttpHeaders } from '@angular/common/http/';
import { Router, ActivatedRoute } from '@angular/router';
import { FastService } from 'src/app/services/fast.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  // ctors
  constructor(private fastSVC: FastService, private router: Router, private route: ActivatedRoute) { }


  // fields
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
    // if (!this.selected && this.route.snapshot.paramMap.get('id')) {
    //   if (!this.selected && this.route.snapshot.paramMap.get('id')) {
    //     this.fastSVC.show(this.route.snapshot.paramMap.get('id')).subscribe(
    //       data => {
    //         this.selected = data;
    //         if (this.selected === null) {
    //           this.router.navigateByUrl('todo' + this.route.snapshot.paramMap.get('id') + 'NotFound');
    //         }
    //       },
    //       err => console.error('failed to find a single todo')
    //     );
    //   }

    // }
    // else {
    // this.getTheMonth();
    this.reload();
    // }

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
        console.log('inside of reload' + data);
        this.fasts.forEach(e => {
          console.log(e.date + '   ' + e.start);

        });
      },
      (err) => {
        console.log(err);
      }
    );
  }


}


