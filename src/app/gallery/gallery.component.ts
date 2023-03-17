import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class AppGalleryComponent {
    gallery : any[] = [];

    ngOnInit(){
      for (let i = 1; i < 15; i++) {
        this.gallery.push({
          imgPath: `assets/img/gal-${i}.jpeg`,
          alt: `Gallery image ${i}`,
          figureClass: `gallery__item gallery__item--${i}`
         });
      }
    }
}
