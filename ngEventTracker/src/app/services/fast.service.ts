import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Fast } from '../models/fast.model';

@Injectable({
  providedIn: 'root'
})
export class FastService {

  // fields
  private url = 'http://localhost:8090/api/fasts';
  newFast = new Fast();
  editFast;
  fasts = [];



  // ctors
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  // methods
  index() {
    console.log("inside index in service");

    return this.http.get<Fast[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FastService.index(): Error');
      })

    );
  }

  handleError(error: any) {
    console.error('Something Broke');
    return throwError(error.json().error || 'Server Error');
    // this.newFast.date.getDay
  }

  create(newFast: Fast) {

    console.log('in create service ID ' + newFast.id);
    console.log('in create service DATE ' + newFast.date);
    console.log('in create service LEGNTH ' + newFast.length);
    // const httpOptions = {
    //   header: {
    //     'Content-type': 'applicaiton/json'
    //   }
    // };

    return this.http.post<Fast>(this.url, newFast).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FastService.create(): Error');
      })
    );
  }


  update(fast: Fast) {


    // if (fast.completed) {
    //   fast.completeDate = this.datePipe.transform(Date.now(), 'shortDate');
    // } else {
    //   fast.completeDate = '';
    // }



    console.log("in update service " + fast.id + " " + fast.date);
    const httpOptions = {

      header: {
        'Content-type': 'application/json'
      }
    };
    return this.http.put<Fast>(`${this.url}/${fast.id}`, fast).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FastService.update(): Error');
      })
    );
  }


  delete(id: number) {
    console.log("service" + id);

    const httpOptions = {

      header: {
        'Content-type': 'applicaiton/json'
      }
    };
    return this.http.delete<Fast>(this.url + '/' + id
    ).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FastService.delete(): Error');
      })
    );
  }

  show(id) {
    return this.http.get<Fast>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FastService.craete(): Error');
      })

    );
  }
}

