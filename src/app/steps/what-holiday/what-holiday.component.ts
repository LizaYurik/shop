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

  //pagitation settings
  color: ThemePalette = 'primary';
  mode: MatProgressBarModule = 'determinate';
  value = 50;
  bufferValue = 100;
  //pagitation settings

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
    
  ngOnInit() {
    this.formStepHoliday = this.formBuilder.group({
      whatHoliday: ['', [Validators.required]]
    })
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
