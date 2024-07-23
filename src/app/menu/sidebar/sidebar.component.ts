import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  listItems = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Find Owner', icon: 'image_search', path: '/find-owner' },
    { label: 'Add Owner', icon: 'account_box', path: '/add-owner' },
  ];
}
