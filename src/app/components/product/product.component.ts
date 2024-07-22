import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  path_to_file: string = 'assets/images/';
  products: IProduct[] = [
    {
      image: this.path_to_file + 'food1.png',
      title: 'Chicken Manjoori',
      price: 15,
      description:
        'Dish relished by all age groups as a starter dish at parties.',
    },
    {
      image: this.path_to_file + 'food2.png',
      title: 'Hotdog',
      price: 10,
      description:
        'Grilled sausage served in the slit of a partially sliced bun.',
    },
    {
      image: this.path_to_file + 'food3.png',
      title: 'Fresh Salmon',
      price: 5,
      description:
        'Beat the health blues with our Super Immune Blue Juice Recipe.',
    },
    {
      image: this.path_to_file + 'food4.png',
      title: 'Veg Burger',
      price: 10,
      description: 'Burgers may be made from ingredients like beans.',
    },
  ];
}
