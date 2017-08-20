import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private searchUrl: string;
    private artistSearchUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    private accessToken = "Your Token";
    constructor(private _http: Http) {

    }
 
    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + this.accessToken);
    }

    searchMusic(str: string, type = "artist") {
        console.log(str);
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        this.searchUrl = "https://api.spotify.com/v1/search?q=" + str + "&offset=0&limit=20&type=" + type + "&market=US";
        console.log(this.searchUrl);
        return this._http.get(this.searchUrl,{headers : headers}).map(res => res.json());
    }

    getArtist(id: string){
        console.log(id);
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        this.artistSearchUrl = "https://api.spotify.com/v1/artists/"+id;
        console.log(this.artistSearchUrl);
        return this._http.get(this.artistSearchUrl,{headers : headers}).map(res => res.json());

    }

    getAlbums(artistId: string){
        console.log(artistId);
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        this.albumsUrl = "https://api.spotify.com/v1/artists/"+artistId+"/albums";
        console.log(this.albumsUrl);
        return this._http.get(this.albumsUrl,{headers : headers}).map(res => res.json());

    }

    getAlbum(id: string){
        console.log(id);
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        this.albumUrl = "https://api.spotify.com/v1/albums/"+id;
        console.log(this.albumUrl);
        return this._http.get(this.albumUrl,{headers : headers}).map(res => res.json());

    }
}