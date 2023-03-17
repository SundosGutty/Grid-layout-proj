import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
    navItems = [
      'Find your dream home',
      'Request proposal',
      'Download home planner',
      'Contact us',
      'Submit your property',
      'Come work with us!'
    ]
}
