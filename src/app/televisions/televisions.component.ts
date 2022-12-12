import { Component, OnInit } from '@angular/core';
import { Televisions } from '../Televisions';
import { PrductService } from '../prduct.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.scss']
})
export class TelevisionsComponent implements OnInit {

  constructor(private productService:PrductService) { }

  ngOnInit(): void {
    this.productService.getTelevisions().subscribe(data=>{
      this.televisions=data;
      this.filteredArray = this.televisions
    })
  }
  televisions:Televisions[]=[]
  filteredArray = this.televisions
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
