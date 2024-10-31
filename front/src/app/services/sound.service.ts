import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private audio: HTMLAudioElement | null = null;

  constructor(private http: HttpClient) {}

  url = 'http://localhost:4000';


    getAudio(audioUrl: string){
    
      const params = new HttpParams().set('audioUrl', audioUrl);

      return this.http.get(`${this.url}/proxy`, { params: params });
    }
    
    

}
