import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Laptops } from '../laptops';
import { PrductService } from '../prduct.service';

@Component({
  selector: 'app-laptops-details',
  templateUrl: './laptops-details.component.html',
  styleUrls: ['./laptops-details.component.scss']
})
export class LaptopsDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private productService:PrductService) { }
    fetchedLaptop$!:Observable<Laptops|undefined>

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    console.log(id)

    this.fetchedLaptop$ = this.productService.getLaptopsById(id)
    console.log(this.fetchedLaptop$);

    // this.productService.getLaptopsById(id).subscribe(data=>console.log(data))
  }

}
