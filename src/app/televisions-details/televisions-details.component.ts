import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PrductService } from '../prduct.service';
import { Televisions } from '../Televisions';

@Component({
  selector: 'app-televisions-details',
  templateUrl: './televisions-details.component.html',
  styleUrls: ['./televisions-details.component.scss']
})
export class TelevisionsDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private productService:PrductService) { }

    fetchedTelevision$!:Observable<Televisions|undefined>

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id')!
    console.log(id)

   this.fetchedTelevision$ = this.productService.getTelevisionsById(id)
    console.log(this.fetchedTelevision$);

    this.productService.getTelevisionsById(id).subscribe(data=>console.log(data))
  }

}
