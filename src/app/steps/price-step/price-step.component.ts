import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/';

@Component({
  selector: 'app-price-step',
  templateUrl: './price-step.component.html',
  styleUrls: ['../steps.component.scss']
})
export class PriceStepComponent implements OnInit {
  formPrice: FormGroup;

  sub: any;
  page : any;

  //pagitation settings
  color: ThemePalette = 'primary';
  mode: MatProgressBarModule = 'determinate';
  value = 75;
  bufferValue = 100;
  business_name: string;
  //pagitation settings


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit() {
    this.formPrice = this.formBuilder.group({
      price: ['', Validators.required],
    })
  }
  get form() { return this.formPrice.controls;}

  getFormValue(){
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.page = this.formPrice.value.price
    });
    this.router.navigate(['/result/product-list'], { queryParams: { "price-step": this.page}, queryParamsHandling: "merge" });
  }

}
