import { Component, Input } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';

declare var window:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() data!:any;

  navLinks:any = [
    {
      text: 'Dashboard',
      icon: 'view-dashboard',
      link: 'dashboard'
    },
    {
      text: 'Address book',
      icon: 'book-account',
      link: 'addressbook'
    },
    {
      text: 'NFTs',
      icon: 'palette',
      link: 'nfts'
    },
    {
      text: 'PRO',
      icon: 'finance',
      link: 'pro'
    },
    {
      text: 'Stats',
      icon: 'chart-box',
      link: 'stats'
    },
    {
      text: 'Tools',
      icon: 'toolbox',
      link: 'tools'
    },
    {
      text: 'Ecosystem',
      icon: 'sprout',
      link: 'ecosystem'
    },
    {
      text: 'Blog',
      icon: 'book',
      link: 'blog'
    },
    {
      text: 'Aptos',
      icon: 'open-in-new',
      link: 'aptos'
    },
    {
      text: 'Settings',
      icon: 'cog',
      link: 'settings'
    },
  ];

  isAdmin = false;

  constructor(
    private storage: StorageService,
  ) {}

  ngOnInit() {
    try {
      const user = this.storage.get('user');

      if(user) {
        this.navLinks[0].link = 'home';

        this.isAdmin = user.account==='1'?true:false;
      }
      
    } catch (error) {
      
    }
  }

  hideMenu() {
    console.log('hide');
    const myOffcanvas = new window.bootstrap.Offcanvas(document.getElementById('menu'));
    myOffcanvas.hide();
  }

  track() {
    console.log('track');
  }
}
