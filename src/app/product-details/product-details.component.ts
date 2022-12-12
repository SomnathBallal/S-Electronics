import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PrductService } from '../prduct.service'
import { Produts } from '../produts';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private productService: PrductService
  ) { }
  fetched_product$!: Observable<Produts | undefined>

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    console.log(id)

    this.fetched_product$ = this.productService.getProductById(id)
    console.log(this.fetched_product$);

    this.productService.getProductById(id).subscribe(data=>console.log(data))
    
  }

}
