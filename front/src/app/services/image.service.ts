import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }


  uploadImages(images){
    return this.http.post(`${this.url}/birds/upload`,  images); 
  }


  updateBirdImages(birdName, images){
    const dataForm = {
      birdName: birdName,
      images : images
    }

    return this.http.post(`${this.url}/birds/updateBirdImages`,  dataForm);
  }

  getBirdImageObject(birdName) {
    const params = new HttpParams().set('birdName', birdName);
    return this.http.get(`${this.url}/birds/getBirdImageObject`, { params });
  }
  
}
