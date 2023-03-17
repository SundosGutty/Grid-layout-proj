import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFeaturesComponent } from './features/features.component';
import { AppGalleryComponent } from './gallery/gallery.component';
import { AppHomesListComponent } from './homes-list/homes-list.component';
import { AppRealtorsComponent } from './realtors/realtors.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { AppStoryContentComponent } from './story-content/story-content.component';
import { AppStoryPicturesComponent } from './story-pictures/story-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppGalleryComponent,
    AppSidebarComponent,
    AppFeaturesComponent,
    AppFooterComponent,
    AppStoryPicturesComponent,
    AppRealtorsComponent,
    AppHomesListComponent,
    AppStoryContentComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
