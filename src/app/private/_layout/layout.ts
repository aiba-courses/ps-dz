import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenu } from '../components/nav-menu/nav-menu';
import { ContentControl } from '../components/content-control/content-control';

@Component({
  imports: [RouterOutlet, NavMenu, ContentControl],
  selector: 'app-layout',
  styleUrl: './layout.scss',
  templateUrl: './layout.html',
})
export class PrivateLayout {}
