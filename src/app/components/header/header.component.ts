import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  phone: string = '123 456 789';
  handleClick(ev: MouseEvent) {
    alert('Button' + ev);
  }
}
