import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  registerTitle = 'Register';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private userService: UserService
  ) { }

  ngOnInit() {
    const me = this;
    me.setValidators();
  }

  setValidators() {
    const me = this;
    me.registerForm = me.fb.group({
      name: ['', Validators.required],
      mobile_no: ['', Validators.required],
      pin_code: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onLogin() {
    const me = this;
    me.router.navigateByUrl('login');
  }

  onRegister(data: any) {
    const me = this;
    if (!me.registerForm.valid) {
      return;
    }
    me.userService.register(data).subscribe((res) => {
      console.log(res);
    });
  }

}
