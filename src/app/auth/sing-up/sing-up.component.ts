import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SingUpComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    
  }

}
