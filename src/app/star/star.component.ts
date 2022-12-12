import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  constructor() { }
  
  
  @Input()

  start_rating!:number
  startWidth!:number

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.startWidth=this.start_rating*16
  }
  
  @Output()
  value = new EventEmitter<number>() ; emmitValue(){
    this.value.emit(12)
  }


}
