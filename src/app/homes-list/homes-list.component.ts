import { Component } from '@angular/core';

@Component({
  selector: 'homes-list',
  templateUrl: './homes-list.component.html',
  styleUrls: ['./homes-list.component.scss']
})
export class AppHomesListComponent {
    homesList =[
      {
        image: {path: 'assets/img/house-1.jpeg', alt: 'House 1'}, 
        country: 'USA',
        description: 'Beautiful Familiy House',
        details :{
          numOfRooms : 5, meters: 325, price: '1,200,000'
        }
      },
      {
        image: {path: 'assets/img/house-2.jpeg', alt: 'House 2'}, 
        country: 'Canada',
        description: 'Modern Glass Villa',
        details :{
          numOfRooms : 6, meters: 450, price: '2,750,000'
        }
      },
      {
        image: {path: 'assets/img/house-3.jpeg', alt: 'House 3'}, 
        country: 'UK',
        description: 'Cozy Country House',
        details :{
          numOfRooms : 4, meters: 250, price: '850,000'
        }
      },
      {
        image: {path: 'assets/img/house-4.jpeg', alt: 'House 4'}, 
        country: 'Portugal',
        description: 'Large Rustical Villa',
        details :{
          numOfRooms : 6, meters: 480, price: '1,950,000'
        }
      },
      {
        image: {path: 'assets/img/house-5.jpeg', alt: 'House 5'}, 
        country: 'Germany',
        description: 'Majestic Palace House',
        details :{
          numOfRooms : 18, meters: 4230, price: '9,500,000'
        }
      },
      {
        image: {path: 'assets/img/house-5.jpeg', alt: 'House 5'}, 
        country: 'Italy',
        description: 'Modern Familiy Apartmente',
        details :{
          numOfRooms : 3, meters: 180, price: '600,000'
        }
      },
    ]
}