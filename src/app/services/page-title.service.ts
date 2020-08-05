import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor(
    private titleServie: Title
  ) { }

  setPageTitle(router: Router, activatedRoute: ActivatedRoute) {
    const me = this;
    activatedRoute.params.subscribe((event) => {
      const title = me.getPageTitle(router.routerState, router.routerState.root).join('-');
      me.titleServie.setTitle(title);
    });
  }

  getPageTitle(state: any, parent: any) {
    const title = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      title.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      title.push(... this.getPageTitle(state, state.firstChild(parent)));
    }
    return title;
  }
}
