import { Component, OnInit } from '@angular/core';
import { ReviewForm } from '../review-form';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  constructor() { }

  fm = new ReviewForm

  ngOnInit(): void {
  }

  submitData(){
    console.log(this.fm)
  }
}
