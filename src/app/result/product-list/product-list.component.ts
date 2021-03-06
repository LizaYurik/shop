import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as data from '../../../assets/data.json';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  resultData: any = (data as any).default; 
  info: string;
  infoAboutHoliday: string;
  forWhom: string;
  whatHoliday: string;
  priceStep: string;
  infoHoliday: string;
  infoPrice: string;

  constructor( private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.forWhom = params['for_whom'] || localStorage.getItem('for_whom');
      this.whatHoliday = params['what_holiday'] || localStorage.getItem('what_holiday');
      this.priceStep = params['price-step'] || localStorage.getItem('price-step');
    });
    
  }
  
  ngOnInit() {

    if( this.forWhom && this.whatHoliday && this.priceStep) {
      this.router.navigate(['/result/product-list'], { queryParams: { 
        "for_whom": this.forWhom,
        'what_holiday': this.whatHoliday,
        'price-step': this.priceStep,
      }, queryParamsHandling: "merge" });
      
      localStorage.setItem('for_whom', this.forWhom);
      localStorage.setItem('what_holiday', this.whatHoliday);
      localStorage.setItem('price-step', this.priceStep);
      
    }else {
      this.router.navigate(['get-start'])
    }

    const forWhom = this.forWhom;
    const whatHoliday = this.whatHoliday;
    const priceStep = this.priceStep;

    if(this.forWhom === ''){
      this.router.navigate(['get-start'])
    }

    if(this.whatHoliday){
      this.infoAboutHoliday = this.resultData.filter(function(i){
        return (i.id === whatHoliday)
       
      })
    }
   

    if(this.forWhom && this.whatHoliday && this.priceStep) {
      this.info  = this.resultData.filter(function(i){
        return (i.for === forWhom && i.holiday === whatHoliday && i.price === priceStep)
      })
      
    }
  }


  loadDetails(item) {
    this.router.navigate(['/result/product-list', item.id], {queryParams:{
      "id": item.id,
    }})
  }

}
