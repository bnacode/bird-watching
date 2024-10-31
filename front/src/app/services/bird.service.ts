import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:4000';


  getAllBirds(){
    return this.http.get(`${this.url}/birds/getAllBirds`);
   
  }

  loginAdmin(usernameFromForm, passwordFromForm){
    const data = {
      username: usernameFromForm,
      password: passwordFromForm
    }

    return this.http.post(`${this.url}/birds/loginAdmin`, data);
  }
  
  getAllBirdImages(){
    return this.http.get(`${this.url}/birds/getAllBirdImages`);
   
  }

  

  updateBirdImageFromAdmin(bird){
    const data = {
      updatedBirdImage: bird,

    }
    return this.http.post(`${this.url}/birds/updateBirdImageFromAdmin`, data);
  }
  

}
