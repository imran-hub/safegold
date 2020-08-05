import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './content/home/home.component';
import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { BlogComponent } from './content/blog/blog.component';
import { AboutComponent } from './content/about/about.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


const routes: Routes = [];

@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    AppLayoutRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutModule { }
