import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material';

@Component({
  selector: 'app-for-whom',
  templateUrl: './for-whom.component.html',
  styleUrls: ['../steps.component.scss']
})

export class ForWhomComponent implements OnInit {

  formSteps: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router
    ) {
  }
  
  sub: any;
  page : any;

  //pagitation settings
  color: ThemePalette = 'primary';
  mode: MatProgressBarModule = 'determinate';
  value = 25;
  bufferValue = 100;
  //pagitation settings
  
  ngOnInit(){
    this.formSteps =  this.formBuilder.group({
      forWhom: ['', [Validators.required]],
    })
  }
  get form() { return this.formSteps.controls;}
  
  getFormValue(){
    
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.page = this.formSteps.value.forWhom;
      });
      this.router.navigate(['/what-holiday'], { queryParams: { "for_whom": this.page}, queryParamsHandling: "merge"});
      // localStorage.setItem('industry', this.formSteps.value.industry)
      
  }

}
