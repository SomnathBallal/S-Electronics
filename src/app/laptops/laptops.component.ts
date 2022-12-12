import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Laptops } from '../laptops';
import { PrductService } from '../prduct.service';
import { Produts } from '../produts';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {

  constructor(private productService:PrductService) { }
  

  ngOnInit(): void {
    this.productService.getLaptops().subscribe(data=>{
      this.laptops = data;
      this.filteredArray = this.laptops
        
    })
  }
  laptops: Laptops[] = []

  filteredArray = this.laptops
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
