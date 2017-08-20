import { Component , OnInit} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../../Album';
import { Artist } from '../../../Artist';
import { ActivatedRoute } from '@angular/router'; 

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    providers: [SpotifyService]
})

export class AlbumComponent implements OnInit{

    private id: string;
    private album: Album[];

    constructor(private _spotifyService: SpotifyService, private _activatedRoute: ActivatedRoute){

    }

    ngOnInit() {
        
        console.log(this._activatedRoute.params);

        this._activatedRoute
            .params.map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                        console.log(this.album);
                    });

                
            })
    }
}