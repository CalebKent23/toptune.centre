import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/dynamic-components/carousel/carousel.component';
import { GalleryComponent } from './components/dynamic-components/gallery/gallery.component';
import { ProjectDetailComponent } from './components/dynamic-components/project-detail/project-detail.component';
import { TestimonialsComponent } from './components/dynamic-components/testimonials/testimonials.component';
import { MenuDesktopComponent } from './components/static-components/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from './components/static-components/menu-mobile/menu-mobile.component';
import { FooterComponent } from './components/static-components/footer/footer.component';
import { HomeComponent } from './components/top-level-components/home/home.component';
import { StoryComponent } from './components/top-level-components/story/story.component';
import { ProjectsComponent } from './components/top-level-components/projects/projects.component';
import { ContactComponent } from './components/top-level-components/contact/contact.component';
import { GalleryImagesComponent } from './components/dynamic-components/gallery-images/gallery-images.component';
import { TestimonialQuotesComponent } from './components/dynamic-components/testimonial-quotes/testimonial-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    GalleryComponent,
    ProjectDetailComponent,
    TestimonialsComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
    FooterComponent,
    HomeComponent,
    StoryComponent,
    ProjectsComponent,
    ContactComponent,
    GalleryImagesComponent,
    TestimonialQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
