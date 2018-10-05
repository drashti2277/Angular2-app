import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating : number;
  
  ratingArr :any =[];
  //child can only communicate through events
 //we made var ratingEvent to define an event


@Output() ratingEvent: EventEmitter<string> = new EventEmitter(); //child needs tom expose a variable for parent to use it.//child can only communicate with parent through events
 //we made var ratingEvent to define an event

  constructor() { }

  ngOnInit() {
   this.ratingArr = Array(Math.round(this.rating)).fill(Math.round(this.rating));
   
  }
  
  ratingEventfn(){
    this.ratingEvent.emit("Rating value:" + this.rating);
  }
}
