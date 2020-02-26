import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-header-result',
  templateUrl: './header-result.component.html',
  styleUrls: ['./header-result.component.scss']
})
export class HeaderResultComponent implements OnInit {
  userData: any;
  getUserStorage:string;
  condition: boolean;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    public authService: AuthService,
    public ngZone: NgZone
    ) { 

     
      this.getUserStorage = localStorage.getItem('user');
      if(this.getUserStorage !== "null"){
       // setTimeout(function(){

          this.condition = true;
        //},1000)
      
      }
    }

  ngOnInit() {
  }

  clearResult(){
    this.router.navigate(['get-start']);
    localStorage.clear();
  }

}
