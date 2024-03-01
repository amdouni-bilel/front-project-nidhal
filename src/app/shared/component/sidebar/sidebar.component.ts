import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSubMenuVisible: boolean = false;

  toggleSubMenu() {
    this.isSubMenuVisible = !this.isSubMenuVisible;
  }

}
