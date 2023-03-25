import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';

const routes: Routes = [
 
  {
    path:'', component:DashboardComponent
  },
  {
    path:'viewpost/:id',component:ViewpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
