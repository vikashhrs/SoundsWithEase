import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent},
    { path: 'album/:id', component: AlbumComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
        // other imports here
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutes { }