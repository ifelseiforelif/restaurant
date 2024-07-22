import { Component, Input } from '@angular/core';
import { Info } from '../../../interfaces/Info';

@Component({
  selector: 'app-info-detail',
  standalone: true,
  imports: [],
  templateUrl: './info-detail.component.html',
  styleUrl: './info-detail.component.scss',
})
export class InfoDetailComponent {
  @Input() info_object!: Info;
}
