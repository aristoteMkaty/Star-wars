import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { HomeComponent } from './home/home.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { DetailInformationComponent } from './detail-information/detail-information.component';
import { ConvertToSpacesPipePipe } from './ConvertToSpacesPipe/convert-to-spaces-pipe.pipe';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    HomeComponent,
    FilmCardComponent,
    DetailInformationComponent,
    ConvertToSpacesPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
