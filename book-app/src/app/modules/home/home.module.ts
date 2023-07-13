import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DashboardComponent, FormComponent, HomeComponent],
  exports: [DashboardComponent, FormComponent, HomeComponent],
})
export class HomeModule {}
