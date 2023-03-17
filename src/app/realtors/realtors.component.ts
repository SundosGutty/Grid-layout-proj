import { Component } from '@angular/core';

@Component({
  selector: 'app-realtors',
  templateUrl: './realtors.component.html',
  styleUrls: ['./realtors.component.scss']
})
export class AppRealtorsComponent {
  realtorsList =[
    {
      imgPath: 'assets/img/realtor-1.jpeg',
      name: 'Erik Feinman',
      soldHouses: 245
    },
    {
      imgPath: 'assets/img/realtor-2.jpeg',
      name: 'Kim Brown',
      soldHouses: 212
    },
    {
      imgPath: 'assets/img/realtor-3.jpeg',
      name: 'Toby Ramsey',
      soldHouses: 198
    },
  ]
}