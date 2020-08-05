import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
