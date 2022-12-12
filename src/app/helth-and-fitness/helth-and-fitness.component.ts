import { Component, OnInit } from '@angular/core';
import { Helth } from '../Helth';
import { PrductService } from '../prduct.service';

@Component({
  selector: 'app-helth-and-fitness',
  templateUrl: './helth-and-fitness.component.html',
  styleUrls: ['./helth-and-fitness.component.scss']
})
export class HelthAndFitnessComponent implements OnInit {

  constructor(private productService:PrductService) { }

  ngOnInit(): void {
    this.productService.getHelth().subscribe(data=>{
      this.helth=data;
      this.filteredArray = this.helth
    })
  }
  helth:Helth[]=[]
  filteredArray = this.helth
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
