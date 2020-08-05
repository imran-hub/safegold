import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'src/app/services/page-title.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  ownOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoWidth: true,
    navSpeed: 700,
    navText: ['', ''],
    nav: true
  };

  slides = [
    {
      id: 1,
      title: 'Slide 1'
    },
    {
      id: 2,
      title: 'Slide 2'
    },
    {
      id: 3,
      title: 'Slide 3'
    },
    {
      id: 4,
      title: 'Slide 4'
    }
  ];

  whys = [
    {
      text: 'Buy-sell anytime, anywhere'
    },
    {
      text: 'Exchange for jewellery at our partner jewellers or ask for home delivery of coins and bars'
    },
    {
      text: 'Send a gift of gold via a WhatsApp message'
    },
    {
      text: 'Setup an online SIP for building long term wealth'
    }
  ];


  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private pageTitleService: PageTitleService
  ) { }

  ngOnInit() {
    const me = this;
    me.pageTitleService.setPageTitle(me.router, me.activateRoute);
  }

}
