import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-result',
  templateUrl: './header-result.component.html',
  styleUrls: ['./header-result.component.scss']
})
export class HeaderResultComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  clearResult(){
    this.router.navigate(['get-start']);
    localStorage.clear();
  }

}
