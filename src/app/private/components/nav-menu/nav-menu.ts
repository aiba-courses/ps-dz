import { Component } from '@angular/core';
import { IMenu, navItems } from '../../../shared/constants/menu-items.const';
import { NavButton } from '../nav-button/nav-button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [NavButton, RouterLinkActive, RouterLink],
  selector: 'app-nav-menu',
  styleUrl: './nav-menu.scss',
  templateUrl: './nav-menu.html',
})
export class NavMenu {
  navItems: IMenu[] = navItems;

  onNavClick() {}
}
