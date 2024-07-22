import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

export const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'reservation', component: ReservationFormComponent },
];
