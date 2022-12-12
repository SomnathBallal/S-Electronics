import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Laptops } from './laptops';
import { PrductService } from './prduct.service';
import { Produts } from './produts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'S-Electronics';
  products!:Produts[];
  product!:any;
  laptops!:Laptops[];
  laptop!:any;
  constructor(
    private productService: PrductService
  ) { }
  cv = 0
  ngOnInit(): void {
    this.productService.getcartValue().subscribe(val => this.cv = val)
    
   this.productService.getProducts().subscribe(data=>this.products = data) 
   this.productService.getLaptops().subscribe(data=>this.laptops=data)
 
  }

  showCartValue() {
    console.log(this.productService.cartValue);
    this.cv = this.productService.cartValue
  }
  
// code for filter

  filteredArray = this.products
   phone_name=""  
  
  filtername(event:any){
console.log(event.target.value)
this.phone_name=event.target.value

this.filteredArray = this.products.filter(product => product.name.toLowerCase().includes(this.phone_name.toLowerCase()))

  }

//   get phoneName(){
//     return this.phone_name
//     this.filteredArray = this.products.filter(product => product.name.toLowerCase().includes(this.phone_name.toLowerCase()))
//     // this.filteredArray = this.products.filter(product => product.name.toLowerCase().includes(this.searchPhone.toLowerCase()))
//   }

//  set phoneName(searchPhone){
// this.phone_name=searchPhone;
// this.filteredArray = this.products.filter(product => product.name.toLowerCase().includes(this.phone_name.toLowerCase()))

//  }
}

