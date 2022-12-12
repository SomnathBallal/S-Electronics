import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelthAndFitnessDetailsComponent } from './helth-and-fitness-details/helth-and-fitness-details.component';
import { HelthAndFitnessComponent } from './helth-and-fitness/helth-and-fitness.component';
import { HomeComponent } from './home/home.component';
import { KitchenAppliancesDetailsComponent } from './kitchen-appliances-details/kitchen-appliances-details.component';
import { KitchenAppliancesComponent } from './kitchen-appliances/kitchen-appliances.component';
import { LaptopsDetailsComponent } from './laptops-details/laptops-details.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { PhonesComponent } from './phones/phones.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { TelevisionsDetailsComponent } from './televisions-details/televisions-details.component';
import { TelevisionsComponent } from './televisions/televisions.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "phones",
    component: PhonesComponent
  },
  {
    path: "laptops",
    component: LaptopsComponent
  },
  {
    path: "televisions",
    component: TelevisionsComponent
  },
  {
    path: "Kitchen-Appliances",
    component: KitchenAppliancesComponent
  },
  {
    path: "Helth-and-Fitness",
    component: HelthAndFitnessComponent
  },
  {
    path: "profile-form",
    component: ProfileFormComponent
  },
  {
    path: "phones/:id",
    component: ProductDetailsComponent
  },
  {
    path: "laptops/:id",
    component: LaptopsDetailsComponent
  },
  {
    path: "televisions/:id",
    component: TelevisionsDetailsComponent
  },
  {
    path: "kitchen-appliances/:id",
    component: KitchenAppliancesDetailsComponent
  },
  {
    path: "helth-and-fitness/:id",
    component: HelthAndFitnessDetailsComponent
  },
  {
    path: "",
    redirectTo: "/home", pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
