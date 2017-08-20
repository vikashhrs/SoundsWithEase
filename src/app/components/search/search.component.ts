import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService]
})

export class SearchComponent {
    searchString: string; 
    searchResults: Artist[];


    constructor(private _spotifyService: SpotifyService){

    }

    searchMusic(){
        this._spotifyService.searchMusic(this.searchString).subscribe(res => {
            this.searchResults = res.artists.items;
            console.log(res.artists.items);
        });
    }
 }
