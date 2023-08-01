import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamHomeComponent } from './cam-home/cam-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CamaraDetailsComponent } from './camara-details/camara-details.component';
import { CamaraRentalComponent } from './camara-rental.component';
import { LensListComponent } from './lens-list/lens-list.component';

const routes: Routes = [
  {
  path: '',
  component: CamaraRentalComponent,
  children: [
    {
      path: 'dslr',
      component: ProductListComponent,
    },
    {
      path: 'camHome',
      component: CamHomeComponent,
    },
    {
      path: 'camara-details',
      component: CamaraDetailsComponent,
    },
    {
      path: 'lens',
      component: LensListComponent,
    },
  ],
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraRentalRoutingModule { }
