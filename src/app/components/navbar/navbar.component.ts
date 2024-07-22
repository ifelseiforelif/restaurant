import { Component } from '@angular/core';
import { Menu } from '../../interfaces/Menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menu_items: Menu[] = [
    { name: 'Home', link: '/home' },
    { name: 'About Us', link: '/about' },
    { name: 'Our Menu', link: '/product' },
    { name: 'Pages', link: '/pages' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact Us', link: '/contact' },
  ];
}
