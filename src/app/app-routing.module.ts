import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddOwnerComponent } from './pages/add-owner/add-owner.component';
import { FindOwnerComponent } from './pages/find-owner/find-owner.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'add-owner', component: AddOwnerComponent },
  { path: 'find-owner', component: FindOwnerComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
