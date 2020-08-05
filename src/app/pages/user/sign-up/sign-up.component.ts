import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {UserService} from 'src/app/services/user.service';
import {MAT_DIALOG_DATA, MatCheckboxChange, MatDialog, MatDialogRef, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {UtilityService} from '../../../services/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  registerTitle = 'Register';
  fields: FormlyFieldConfig[];
  agreed = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private userService: UserService,
    private dialog: MatDialog,
    private util: UtilityService,
    private dialogRef: MatDialogRef<SignUpComponent>,
    private toast: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    const me = this;
    me.registerForm = me.fb.group({});
  }

  ngOnInit() {
    const me = this;
    // me.setValidators();
    me.loadFormFields();
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
    // me.router.navigateByUrl('login');
    const anyDialogOpen = me.dialog.openDialogs.length > 0 ? true : false;
    if (anyDialogOpen) {
      me.closeDialog();
      const dialogRef = me.dialog.open(LoginComponent, {
        width: '600px',
        disableClose: true
      });
    }
  }

  loadFormFields() {
    const me = this;
    me.fields = me.userService.getRegisterFormFields();
  }

  onRegister(data: any) {
    const me = this;
    if (!me.registerForm.valid) {
      const message = 'Please fill all details properly';
      me.util.openSnackbar(message, '');
      return;
    }
    if (me.registerForm.valid && me.agreed) {
      const formVal = me.registerForm && me.registerForm.value;
      console.log(formVal);
      // me.userService.register(data).subscribe((res) => {
      //   console.log(res);
      // });
    } else {
      const toastConfig: MatSnackBarConfig = {
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      };
      const message = 'Please agree to our terms and conditions';
      me.util.openSnackbar(message, '');
    }

  }

  closeDialog() {
    const me = this;
    me.dialogRef.close('closed');
  }

  isAgreed(event: MatCheckboxChange) {
    const me = this;
    me.agreed = event.checked;
  }

}

interface Register {
  fullName: string;
  email?: string;
  mobileNumber: string;
  secret: string;
}
