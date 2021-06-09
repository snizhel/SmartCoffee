import { SmartCoffeeComponent } from './smart-coffee/smart-coffee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'coffee', pathMatch: 'full' },
  { path: 'coffee', component: SmartCoffeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
