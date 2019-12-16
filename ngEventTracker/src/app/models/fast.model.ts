import { DatePipe, Time } from '@angular/common';
export class Fast {


  // FIELDS
  id: number;
  date: Date;
  description: string;
  start: Time;
  end: Time;
  calories: number;
  length: number;
  this: any;



  // CTORS
  constructor(id?: number, date?: Date, description?: string, start?: Time, end?: Time, calories?: number, length?: number) {

    console.log("inside of constructor");
    this.id = id;
    this.description = description;
    this.start = start;
    this.end = end;
    this.calories = calories;
    this.length = length;
    this.date = date;
    console.log("inside constructor " + this.date + "   " + this.start);




  }




}
