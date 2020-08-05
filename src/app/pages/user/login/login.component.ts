import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatRadioChange } from '@angular/material';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginTitle: string;
  loginForm: FormGroup;
  loginParams: Login;
  fields: FormlyFieldConfig[];
  loginType: any = 'customer';

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private titleService: Title,
    private activetedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    const me = this;
    me.loginForm = me.fb.group({});
  }

  ngOnInit() {
    const me = this;
    me.loadFormFields();
  }

  setTitle() {
    const me = this;
    me.router.events.subscribe(event => {
      const re = event instanceof NavigationEnd;
      console.log(re);
    });
  }

  onLogin(event) {
    const me = this;
    if (!me.loginForm.valid) {
      return;
    }
    const formValue = me.loginForm && me.loginForm.value;
    console.log(formValue);

    // me.userService.login(mobile).subscribe((res) => {
    //   console.log(res);
    // });
  }

  onLoginTypeChange(event: MatRadioChange) {
    const me = this;
    const loginType = event.value;
    me.loadFormFields();
  }

  onRegister() {
    const me = this;
    // this.router.navigateByUrl('register');
    const anyDialogOpen = me.dialog.openDialogs.length > 0 ? true : false;
    if (anyDialogOpen) {
      me.closeDialog();
      const dialogRef = me.dialog.open(SignUpComponent, {
        width: '600px',
        disableClose: true
      });
    }
  }

  loadFormFields() {
    const me = this;
    if (me.loginType === 'customer') {
      me.fields = me.userService.getCustomerLoginFormFields();
    } else {
      me.fields = me.userService.getPartnerLoginFormFields();
    }

  }

  closeDialog() {
    const me = this;
    me.dialogRef.close('closed');
  }
}
interface Login {
  email?: string;
  mobile_no: any;
  secret: string;
}