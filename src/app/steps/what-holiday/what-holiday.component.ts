import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/';

@Component({
  selector: 'app-what-holiday',
  templateUrl: './what-holiday.component.html',
  styleUrls: ['../steps.component.scss']
})

export class WhatHolidayComponent implements OnInit {
  formStepHoliday: FormGroup;
  sub: any;
  page : any;


  color: ThemePalette = 'primary';
  mode: MatProgressBarModule = 'determinate';
  value = 50;
  bufferValue = 100;
  forWhom:string;
  holidayList: Array<object>;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }
    
    ngOnInit() {
      this.formStepHoliday = this.formBuilder.group({
        whatHoliday: ['', [Validators.required]]
      });
      this.route.queryParams.subscribe(params => {
        this.forWhom = params['for_whom'] 
      });
      console.log(this.forWhom);
      
      this.holidayList = [
        {id: "christmas" , value: "christmas" , label: "Christmas" },
        {id: "new_year" , value: "new_year" , label: "New Year" },
        {id: "valentines_day" , value: "valentines_day" , label: "Valentine's Day" },
        {id: "mothers_day" , value: "mothers_day" , label: "Mother's Day" }, 
        {id: "march" , value: "march" , label: "March 8" },
        {id: "day_strength" , value: "day_strength" , label: "Day of strength" },
        {id: "birthday" , value: "birthday" , label: "Birthday" },
      ]; 
  }
  get form() { return this.formStepHoliday.controls;}
  
  getFormValue(){
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.page = this.formStepHoliday.value.whatHoliday
    });
    this.router.navigate(['/price-step'], { queryParams: { "what_holiday": this.page}, queryParamsHandling: "merge" });
  }

}
