import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { BlogComponent } from './content/blog/blog.component';
import { AboutComponent } from './content/about/about.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LayoutComponent } from './layout.component';

const baseTitle = 'Safegold :: ';
const childRoutes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { title: baseTitle + 'Buy 24k gold online' } },
      { path: 'blog', component: BlogComponent, data: { title: baseTitle + 'Blog' } },
      { path: 'about-us', component: AboutComponent, data: { title: baseTitle + 'About Us' } },
      { path: '**', component: PageNotFoundComponent, data: { title: baseTitle + 'Page Not Found' } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
