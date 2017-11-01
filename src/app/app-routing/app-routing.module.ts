import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmptyComponent } from '../empty/empty.component';

const routes: Routes = [
  { path: '', component: EmptyComponent },
  { path: 'weather', loadChildren: '../weather/weather.module#WeatherModule' },
  { path: 'currency', loadChildren: '../currency/currency.module#CurrencyModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
