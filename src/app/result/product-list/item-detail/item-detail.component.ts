import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as data from '../../../../assets/data.json';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  id:number;
  detailInfo: string;
  resultData: any = (data as any).default; 
  
  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      const id = params['id'];

      if(id){
        this.detailInfo = this.resultData.filter(function(i){
          return (i.id === id)
        })
      }
    });
  }

  ngOnInit() {

  }

}
