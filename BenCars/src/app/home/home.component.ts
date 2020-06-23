import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars = [
    {
      image:"assets/img/bmw.jpg",
      mark: "BMW",
      info: "The BMW 3 series is one of the most popular german cars in the world."
    },
    {
      image:"assets/img/mustang.jpg",
      mark: "Mustang",
      info: "If you see on the street Ford Mustang, you will alwayes forget the world for one second and admire it."
    },{
      image:"assets/img/mustang.jpg",
      mark: "Mustang",
      info: "If you see on the street Ford Mustang, you will alwayes forget the world for one second and admire it."
    },{
      image:"assets/img/mustang.jpg",
      mark: "Mustang",
      info: "If you see on the street Ford Mustang, you will alwayes forget the world for one second and admire it."
    },{
      image:"assets/img/mustang.jpg",
      mark: "Mustang",
      info: "If you see on the street Ford Mustang, you will alwayes forget the world for one second and admire it."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
