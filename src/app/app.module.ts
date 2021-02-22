import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideDataService } from './slide-data.service';
import { SliderButtonComponent } from './common/carousel/slider-button/slider-button.component';
import { SlideComponent } from './common/carousel/slide/slide.component';
import { SliderHeaderComponent } from './common/carousel/slider-header/slider-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SearchComponent } from './common/search/search.component';
import { CarouselComponent } from './common/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderButtonComponent,
    SlideComponent,
    SliderHeaderComponent,
    SearchComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SlideDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
