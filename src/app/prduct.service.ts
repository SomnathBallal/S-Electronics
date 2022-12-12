import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, Subject } from 'rxjs';
import { Produts } from './produts';
import { Laptops } from './laptops'
import { Televisions } from './Televisions';
import { Kitchen } from './KitchenAppliances';
import { Helth } from './Helth';

@Injectable({
  providedIn: 'root'
})
export class PrductService {

  cartValue = 0
  cartValue$ = new Subject<number>();


  constructor(private http: HttpClient) { }

  increaseCartValue() {
    this.cartValue += 1
    this.cartValue$.next(this.cartValue)
  }

  decreaseCartValue() {
    this.cartValue - +1
  }
  getcartValue() {
    return this.cartValue$
  }

  products: Produts[] = [
    {
      id: 1,
      name: "OnePlus Nord",
      brand: "OnePlus",
      rating: 5,
      price: 19999,
      discription: "OnePlus Nord CE2 Lite 5G (128GB ROM, 6GB RAM, 5011102008, Black Dusk)",
      img: "assets/img/Phones/Mob-2.png"
    },

    {
      id: 2,
      name: "Samsung Galaxy",
      brand: "Samsung",
      rating: 4,
      price: 15499,
      discription: "Samsung Galaxy F42 5G (128GB ROM, 6GB RAM, SM-E426BZAGINS, Matte Black) | With Fast Charger",
      img: "assets/img/Phones/Mob-9.png"
    },

    {
      id: 3,
      name: "OnePlus 9",
      brand: "OnePlus",
      rating: 4.5,
      price: 42999,
      discription: "OnePlus 9 5G (256GB ROM, 12GB RAM, LE2111, Astral Black)",
      img: "assets/img/Phones/Mob-2.png"
    },

    {
      id: 4,
      name: "OnePlus Nord",
      brand: "OnePlus",
      rating: 3,
      price: 19999,
      discription: "OnePlus Nord CE2 Lite 5G (128GB ROM, 6GB RAM, 5011102008, Black Dusk)",
      img: "assets/img/Phones/Mob-2.png"
    },

    {
      id: 5,
      name: "Apple iPhone 13",
      brand: "Apple",
      rating: 5,
      price: 70990,
      discription: "Apple iPhone 13 (128GB ROM, 4GB RAM, MLPJ3HN/A, (Product)Red)",
      img: "assets/img/Phones/Mob-9.png"
    },

    {
      id: 6,
      name: "Oppo A96",
      brand: "Oppo",
      rating: 2.5,
      price: 19999,
      discription: "Oppo A96 (128GB ROM, 8GB RAM, Starry Black)",
      img: "assets/img/Phones/Mob-2.png"
    },

    {
      id: 7,
      name: "Apple iPhone 13",
      brand: "Apple",
      rating: 4.5,
      price: 72990,
      discription: "Apple iPhone 13 (128GB ROM, 4GB RAM, MLPG3HN/A, Starlight White)",
      img: "assets/img/Phones/Mob-9.png"
    },

    {
      id: 8,
      name: "OnePlus 9 Pro",
      brand: "OnePlus",
      rating: 2,
      price: 49999,
      discription: "OnePlus 9 Pro 5G (128GB ROM, 8GB RAM, LE2121_IN, Morning Mist)",
      img: "assets/img/Phones/Mob-2.png"
    },

    {
      id: 9,
      name: "Apple iPhone 13",
      brand: "Apple",
      rating: 3.5,
      price: 70990,
      discription: "Apple iPhone 13 (128GB ROM, 4GB RAM, MLPJ3HN/A, (Product)Red)",
      img: "assets/img/Phones/Mob-9.png"
    },

    {
      id: 10,
      name: "Oppo A96",
      brand: "Oppo",
      rating: 3.4,
      price: 19999,
      discription: "Oppo A96 (128GB ROM, 8GB RAM, Starry Black)",
      img: "assets/img/Phones/Mob-2.png"
    },

    {
      id: 11,
      name: "Apple iPhone 13",
      brand: "Apple",
      rating: 1,
      price: 72990,
      discription: "Apple iPhone 13 (128GB ROM, 4GB RAM, MLPG3HN/A, Starlight White)",
      img: "assets/img/Phones/Mob-9.png"
    },

    {
      id: 12,
      name: "OnePlus 9 Pro",
      brand: "OnePlus",
      rating: 3.4,
      price: 49999,
      discription: "OnePlus 9 Pro 5G (128GB ROM, 8GB RAM, LE2121_IN, Morning Mist)",
      img: "assets/img/Phones/Mob-2.png"
    },

    {
      id: 13,
      name: "OnePlus Nord",
      brand: "OnePlus",
      rating: 5,
      price: 19999,
      discription: "OnePlus Nord CE2 Lite 5G (128GB ROM, 6GB RAM, 5011102008, Black Dusk)",
      img: "assets/img/Phones/Mob-2.png"
    },

    {
      id: 14,
      name: "Samsung Galaxy",
      brand: "Samsung",
      rating: 4.5,
      price: 15499,
      discription: "Samsung Galaxy F42 5G (128GB ROM, 6GB RAM, SM-E426BZAGINS, Matte Black) | With Fast Charger",
      img: "assets/img/Phones/Mob-9.png"
    },

    {
      id: 15,
      name: "OnePlus 9",
      brand: "OnePlus",
      rating: 4,
      price: 42999,
      discription: "OnePlus 9 5G (256GB ROM, 12GB RAM, LE2111, Astral Black)",
      img: "assets/img/Phones/Mob-2.png"
    },

    {
      id: 16,
      name: "OnePlus Nord",
      brand: "OnePlus",
      rating: 3,
      price: 19999,
      discription: "OnePlus Nord CE2 Lite 5G (128GB ROM, 6GB RAM, 5011102008, Black Dusk)",
      img: "assets/img/Phones/Mob-9.png"
    }

  ]

  //  getProducts(): Observable<Produts[]>{
  //   // return this.products
  //   // return of(this.products)
  // return this.http.get<Produts[]>("http://localhost:4200/assets/products.json")

  //  }   

  // getProducts(){
  //   return this.products    
  // }

  // Phones
  getProducts(): Observable<Produts[]> {
    let url = "http://localhost:4200/assets/products.json";
    return this.http.get<Produts[]>(url);
  }

  getProductById(id: number): Observable<Produts | undefined> {
    return this.http.get<Produts[]>("http://localhost:4200/assets/products.json").pipe(map(product => { return product.find(product => product.id === id) }))
  }

  // Laptops
  getLaptops(): Observable<Laptops[]> {
    let url = "http://localhost:4200/assets/laptops.json";
    return this.http.get<Laptops[]>(url);
  }

  getLaptopsById(id: number): Observable<Laptops | undefined> {
    return this.http.get<Laptops[]>("http://localhost:4200/assets/laptops.json").pipe(map(laptop => { return laptop.find(laptop => laptop.id === id) }))
  }

  // Televisions
  getTelevisions(): Observable<Televisions[]> {
    let url = "http://localhost:4200/assets/televisions.json";
    return this.http.get<Televisions[]>(url);
  }

  getTelevisionsById(id: number): Observable<Televisions | undefined> {
    return this.http.get<Televisions[]>("http://localhost:4200/assets/televisions.json").pipe(map(television => { return television.find(television => television.id === id) }))
  }

  //Kitchen Appliances
  getKitchen(): Observable<Kitchen[]> {
    let url = "http://localhost:4200/assets/KitchenAppliances.json";
    return this.http.get<Kitchen[]>(url);
  }


  getKitchenAppliancesById(id: number): Observable<Kitchen | undefined> {
    return this.http.get<Kitchen[]>("http://localhost:4200/assets/KitchenAppliances.json").pipe(map(kitchen => { return kitchen.find(kitchen => kitchen.id === id) }))
  }

  //Helth and Fitness
  getHelth(): Observable<Helth[]> {
    let url = "http://localhost:4200/assets/Helth-and-Fitness.json";
    return this.http.get<Helth[]>(url);
  }


  getHelthById(id: number): Observable<Helth | undefined> {
    return this.http.get<Helth[]>("http://localhost:4200/assets/Helth-and-Fitness.json").pipe(map(Helth => { return Helth.find(Helth => Helth.id === id) }))
  }
}