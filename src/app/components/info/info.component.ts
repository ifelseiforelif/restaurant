import { Component } from '@angular/core';
import { InfoDetailComponent } from './info-detail/info-detail.component';
import { Info } from '../../interfaces/Info';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [InfoDetailComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  path_to_img: string = 'assets/images/';
  info_object: Info[] = [
    {
      image: this.path_to_img + 'info1.png',
      text_bg: 'Locate Us',
      text_sm: 'Riverside 25, San Diego, California',
    },
    {
      image: this.path_to_img + 'info2.png',
      text_bg: 'Open Hours',
      text_sm: 'Mon To Fri 9:00 AM - 9:00 PM',
    },
    {
      image: this.path_to_img + 'info3.png',
      text_bg: 'Reservation',
      text_sm: 'restaurantate@gmail.com',
    },
  ];
}
