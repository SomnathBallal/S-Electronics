import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrductService } from '../prduct.service';
import { Produts } from '../produts';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  constructor(
    private productService: PrductService,
  ) { }
 

  ngOnInit(): void {
    // this.products= this.productService.getProducts()
    
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
        this.filteredArray = this.products
    })

  }
  products: Produts[] = []

filteredArray = this.products
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


