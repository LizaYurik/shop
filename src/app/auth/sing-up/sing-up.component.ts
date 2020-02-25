import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  formSingUp: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.formSingUp = this.formBuilder.group({
      userEmail: ['' , [Validators.required]],
      password: ['' , [Validators.required]]
    })
  }

  getValue(){
    
  }

}
