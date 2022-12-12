import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhonesComponent } from './phones/phones.component';
import { StarComponent } from './star/star.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { KitchenAppliancesComponent } from './kitchen-appliances/kitchen-appliances.component';
import { HelthAndFitnessComponent } from './helth-and-fitness/helth-and-fitness.component';
import { LaptopsDetailsComponent } from './laptops-details/laptops-details.component';
import { TelevisionsDetailsComponent } from './televisions-details/televisions-details.component';
import { KitchenAppliancesDetailsComponent } from './kitchen-appliances-details/kitchen-appliances-details.component';
import { HelthAndFitnessDetailsComponent } from './helth-and-fitness-details/helth-and-fitness-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonesComponent,
    StarComponent,
    ProductDetailsComponent,
    ReviewFormComponent,
    ProfileFormComponent,
    LaptopsComponent,
    TelevisionsComponent,
    KitchenAppliancesComponent,
    HelthAndFitnessComponent,
    LaptopsDetailsComponent,
    TelevisionsDetailsComponent,
    KitchenAppliancesDetailsComponent,
    HelthAndFitnessDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
