import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BlogComponent } from './pages/layout/content/blog/blog.component';
import { AboutComponent } from './pages/layout/content/about/about.component';

const baseTitle = 'Safegold :: ';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { title: baseTitle + 'Buy 24k gold online' } },
  { path: 'login', component: LoginComponent, data: { title: baseTitle + 'Login' } },
  { path: 'register', component: SignUpComponent, data: { title: baseTitle + 'Sign up' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
