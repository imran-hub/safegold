import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLinksGroupOne: FooterLinks[] = [
    {
      id: 'ABOUT_US',
      title: 'About Us',
      link: ''
    },
    {
      id: 'BLOG',
      title: 'Our Blog',
      link: ''
    },
    {
      id: 'FAQ',
      title: 'FAQ',
      link: ''
    },
    {
      id: 'TERMS_OF_USE',
      title: 'Terms Of Use',
      link: ''
    }
  ];
  footerLinksGroupTwo: FooterLinks[] = [
    {
      id: 'PRIVACY_POLICY',
      title: 'Privacy Policy',
      link: ''
    },
    {
      id: 'REFUND_POLICY',
      title: 'Refund Policy',
      link: ''
    },
    {
      id: 'GRIEVIANCE',
      title: 'Grievance',
      link: ''
    },
    {
      id: 'CONTACT_US',
      title: 'Contact Us',
      link: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onFooterItemClick(footerItem: FooterLinks) {
    console.log(footerItem);
  }
}
interface FooterLinks {
  id: string;
  title: string;
  link: string;
}
