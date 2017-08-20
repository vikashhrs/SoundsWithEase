import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutes, FormsModule, HttpModule],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  
}
