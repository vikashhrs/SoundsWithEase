import { Component , OnInit} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../../Album';
import { Artist } from '../../../Artist';
import { ActivatedRoute } from '@angular/router'; 

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    providers: [SpotifyService]
})
export class ArtistComponent implements OnInit{

    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(private _spotifyService : SpotifyService, private _activatedRoute: ActivatedRoute){

    } 

    ngOnInit() {
        console.log(this._activatedRoute.params);

        this._activatedRoute
            .params.map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                        console.log(this.artist);
                    });

                this._spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                        console.log(this.albums);
                    })
            })
        
    }
}