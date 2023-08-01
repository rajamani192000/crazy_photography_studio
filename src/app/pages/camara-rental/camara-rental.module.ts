import { CamaraRentalComponent } from './camara-rental.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamaraRentalRoutingModule } from './camara-rental-routing.module';
import { CamHomeComponent } from './cam-home/cam-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CamaraDetailsComponent } from './camara-details/camara-details.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { LensListComponent } from './lens-list/lens-list.component';

@NgModule({
  declarations: [CamaraRentalComponent, CamHomeComponent, ProductListComponent, CamaraDetailsComponent, LensListComponent],
  imports: [
    ThemeModule,
    RouterModule,
    CommonModule,
    CamaraRentalRoutingModule
  ]
})
export class CamaraRentalModule { }
