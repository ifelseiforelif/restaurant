import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/IProduct';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product!: IProduct;
}
