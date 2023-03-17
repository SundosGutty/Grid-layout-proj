import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class AppFeaturesComponent {
  features= [
    {
      imgPath: "assets/img/sprite.svg#icon-global",
      title: "World's best luxury homes",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
    },
    {
      imgPath: "assets/img/sprite.svg#icon-trophy",
      title: "Only the best properties",
      description: 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'
    },
    {
      imgPath: "assets/img/sprite.svg#icon-map-pin",
      title: "All homes in in top locations",
      description: 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
    },
    {
      imgPath: "assets/img/sprite.svg#icon-key",
      title: "New home in one week",
      description: 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      imgPath: "assets/img/sprite.svg#icon-presentation",
      title: "Top 1% realtors",
      description: 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'
    },
    {
      imgPath: "assets/img/sprite.svg#icon-lock",
      title: "Secure payments on nexter",
      description: 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.'
    },

  ]
}