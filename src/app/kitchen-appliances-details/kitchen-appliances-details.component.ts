import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Kitchen } from '../KitchenAppliances';
import { PrductService } from '../prduct.service';
import { Televisions } from '../Televisions';

@Component({
  selector: 'app-kitchen-appliances-details',
  templateUrl: './kitchen-appliances-details.component.html',
  styleUrls: ['./kitchen-appliances-details.component.scss']
})
export class KitchenAppliancesDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private productService:PrductService) { }

    fetchedKitchen$!:Observable<Kitchen|undefined>

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id')!
    console.log(id)

    this.fetchedKitchen$ = this.productService.getKitchenAppliancesById(id)
    console.log(this.fetchedKitchen$);

    this.productService.getKitchenAppliancesById(id).subscribe(data=>console.log(data))
  }

}
