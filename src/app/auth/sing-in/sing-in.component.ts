import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  formSingIn: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.formSingIn = this.formBuilder.group({
      userName: ['' , [Validators.required]],
      password: ['' , [Validators.required]]
    })
  }

  getValue(){
    
  }

}
