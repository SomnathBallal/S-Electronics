import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../KitchenAppliances';
import { PrductService } from '../prduct.service';

@Component({
  selector: 'app-kitchen-appliances',
  templateUrl: './kitchen-appliances.component.html',
  styleUrls: ['./kitchen-appliances.component.scss']
})
export class KitchenAppliancesComponent implements OnInit {

  constructor(private productService:PrductService) { }

  ngOnInit(): void {
    this.productService.getKitchen().subscribe(data=>{
      this.kitchen=data;
      this.filteredArray = this.kitchen
    })
    
  }
  kitchen:Kitchen[]=[]
    filteredArray = this.kitchen
  addToCart() {
    this.productService.increaseCartValue()
    console.log("added to cart");   

}
// pagination code
start_index = 0
end_index = 8
item_per_page = 8
page_number = 1

nextPage(page_number: number) {
  this.start_index = (page_number - 1) * this.item_per_page
  this.end_index = (page_number) * this.item_per_page
}

displayChildData(data:number) {
  console.log(data);
}
}
