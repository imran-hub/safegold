import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginTitle: string;
  loginForm: FormGroup;
  loginParams: Login;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    const me = this;
    me.validateForm();
  }

  validateForm() {
    const me = this;
    me.loginForm = me.fb.group({
      mobile_no: ['', Validators.required]
    });
  }

  onLogin(mobile: any) {
    const me = this;
    if (!me.loginForm.valid) {
      return;
    }
    console.log(mobile);
    me.userService.login(mobile).subscribe((res) => {
      console.log(res);
    });
  }
  onRegister() {
    this.router.navigateByUrl('register');
  }

}
