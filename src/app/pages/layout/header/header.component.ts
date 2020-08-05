import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../../user/login/login.component';
import { SignUpComponent } from '../../user/sign-up/sign-up.component';
import { stringify } from 'querystring';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  primaryMenu: PrimaryMenu[] = [
    {
      id: 'HOME',
      title: 'Home',
      tooltip: 'Home'
    },
    {
      id: 'ABOUT_US',
      title: 'About Us',
      tooltip: 'About Us'
    },
    {
      id: 'BLOG',
      title: 'Blog',
      tooltip: 'Blog'
    },
    {
      id: 'LOGIN',
      title: 'Login',
      tooltip: 'Login'
    },
    {
      id: 'SIGN_UP',
      title: 'Sign Up',
      tooltip: 'Sign Up'
    }
  ];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private titleServie: Title
  ) { }

  ngOnInit() {
  }

  onMenuItemClick(menuItem: PrimaryMenu) {
    const me = this;
    const menuItemId = menuItem.id;
    switch (menuItemId) {
      case 'HOME':
        me.router.navigateByUrl('/home');
        break;
      case 'ABOUT_US':
        me.router.navigateByUrl('/about-us');
        break;
      case 'BLOG':
        me.router.navigateByUrl('/blog');
        break;
      case 'LOGIN':
        me.login();
        break;
      case 'SIGN_UP':
        me.register();
        break;
    }
  }

  login() {
    const me = this;
    me.openDialogComponent(LoginComponent, null, 'Login');
  }

  register() {
    const me = this;
    me.openDialogComponent(SignUpComponent, null, 'Sign Up');
  }

  openDialogComponent(dialog: any, data?: any, title?: string) {
    const me = this;
    // me.titleServie.setTitle('Safegol :: ' + title);
    const dialogRef = me.dialog.open(dialog, {
      width: '600px',
      data: data ? data : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
}

interface PrimaryMenu {
  id: string;
  title: string;
  tooltip: string;
}
