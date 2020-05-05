import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  constructor() {
    console.log(this.getWeekDays());
  }
  weekDays = [];
  currentDate = new Date();
  selectedDate = this.currentDate;

  ngOnInit() {
  }

  getWeekDays() {
    var oneDay = 24 * 60 * 60 * 1000;
    var inputDate = new Date();
    inputDate = new Date(inputDate.toDateString());
    var minusDate = inputDate.getDay() === 0 ? 6 : (inputDate.getDay() - 1);
    var startDayOfWeek = new Date(new Date(inputDate).getTime() - minusDate * oneDay);
    this.generateWeekDays(startDayOfWeek);
  }

  generateWeekDays(startDate) {
    var oneDay = 24 * 60 * 60 * 1000;
    var dupDay = new Date();
    var i = 1;
    this.weekDays.push(startDate);
    while (i <= 6) {
      dupDay = new Date(new Date(startDate).getTime() + oneDay);
      this.weekDays.push(dupDay);
      startDate = dupDay;
      i++;
    };
  };

  changeWeek(isNextWeek) {
    var oneDay = 24 * 60 * 60 * 1000;
    var inputDate;
    var currentWeekDate;
    if (this.weekDays != undefined && this.weekDays.length > 0) {
      currentWeekDate = this.weekDays[0];
    }
    else {
      currentWeekDate = new Date();
    }
    if (isNextWeek) {
      inputDate = new Date(currentWeekDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    }
    else {
      inputDate = new Date(currentWeekDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    }
    this.weekDays = [];

    inputDate = new Date(inputDate.toDateString());
    var minusDate = inputDate.getDay() === 0 ? 6 : (inputDate.getDay() - 1);
    var startDayOfWeek = new Date(new Date(inputDate).getTime() - minusDate * oneDay);
    this.generateWeekDays(startDayOfWeek);
  };

  getSelectedDateRecords = function(selectedDate) {
    this.selectedDate = selectedDate;
  }

  getClassName(date){
       return ((date.toDateString() == this.selectedDate.toDateString())?'selected':'');
  }
};
