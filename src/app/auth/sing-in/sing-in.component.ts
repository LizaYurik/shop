import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SingInComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
   
  }

}
