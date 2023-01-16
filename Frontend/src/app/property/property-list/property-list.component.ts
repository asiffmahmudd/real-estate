import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price" : 1200
    },
    {
      "Id": 2,
      "Name": "Marla House",
      "Type": "House",
      "Price" : 1000
      },
    {
      "Id": 3,
      "Name": "Greenleaf",
      "Type": "House",
      "Price" : 1100
    },
    {
      "Id": 4,
      "Name": "Ruby",
      "Type": "House",
      "Price" : 1300
      },
  ]

  constructor(

  ){}

  ngOnInit(): void {
    
  }
}
