import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {


  cars = [
    {
    brand: "Honda",
    type: "manual",
    color: "white",
    image: "assets/car1.png"
  },{
    brand: "bmw",
    type: "automatic",
    color: "black",
    image: "assets/car2.png"
  },{
    brand: "Bentli",
    type: "multi",
    color: "blue",
    image: "assets/car1.png"
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
