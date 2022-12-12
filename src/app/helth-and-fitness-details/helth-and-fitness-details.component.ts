import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Helth } from '../Helth';
import { PrductService } from '../prduct.service';

@Component({
  selector: 'app-helth-and-fitness-details',
  templateUrl: './helth-and-fitness-details.component.html',
  styleUrls: ['./helth-and-fitness-details.component.scss']
})
export class HelthAndFitnessDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private productService:PrductService) { }

    fetchedHelth$!:Observable<Helth|undefined>

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id')!
    console.log(id)

    this.fetchedHelth$ = this.productService.getHelthById(id)
    console.log(this.fetchedHelth$);

    this.productService.getHelthById(id).subscribe(data=>console.log(data))
  }

}
