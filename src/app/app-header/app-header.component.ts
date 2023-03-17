import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  homeImgs=  [
    { imgPath: 'assets/img/logo-bbc.png', alt: 'Seen on logo 1'}, 
    {imgPath:'assets/img/logo-forbes.png', alt: 'Seen on logo 2'}, 
    {imgPath:'assets/img/logo-techcrunch.png', alt: 'Seen on logo 3'},
    {imgPath:'assets/img/logo-bi.png', alt: 'Seen on logo 4'}
  ]
    
}
