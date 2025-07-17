import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = [
    "Vehicles",
    "Electronics",
    "Furniture",
    "Clothing",
    "Real Estate",
    "Jobs",
    "Pets",
    "Services",
    "Toys & Games",
    "Appliances",
    "Tools",
    "Sports",
    "Art & Crafts",
    "Musical Instruments",
    "Garden",
    "Baby Items",
    "Collectibles",
    "Computers",
    "Cameras",
    "Bikes",
    "Antiques",
    "Jewelry",
    "Health & Beauty",
    "Food & Beverages",
    "Office Supplies",
    "Luggage",
    "Party Supplies",
    "Construction",
    "Industrial",
    "Other"
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
