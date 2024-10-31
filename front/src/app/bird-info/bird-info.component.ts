import { Component, OnInit } from '@angular/core';
import { Bird } from '../models/bird';
import { BirdService } from '../services/bird.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bird-info',
  templateUrl: './bird-info.component.html',
  styleUrls: ['./bird-info.component.css']
})
export class BirdInfoComponent implements OnInit {

  constructor(private birdService : BirdService, private birdRouter : Router) { }

  ngOnInit(): void {

      this.bird = JSON.parse(localStorage.getItem('bird'));
      this.birdImages = this.bird.slika_m.split(';').map((image) => image.trim());

    
      this.videoLink = this.bird.snimak;

      if (this.bird.pesma) {
        this.sounds.push(["pesma", this.bird.pesma]);
      }
          
      if (this.bird.zov) {
        this.sounds.push(["zov", this.bird.zov]);
      }
      
      if (this.bird.zov_zenke) {
        this.sounds.push(["zov_zenke", this.bird.zov_zenke]);
      }
      
      if (this.bird.zov_u_letu) {
        this.sounds.push(["zov_u_letu", this.bird.zov_u_letu]);
      }
      
      if (this.bird.uzbuna) {
        this.sounds.push(["uzbuna", this.bird.uzbuna]);
      }
      
      if (this.bird.zov_mladunaca) {
        this.sounds.push(["zov_mladunaca", this.bird.zov_mladunaca]);
      }  
  }



  other : boolean;
  otherImage : string = "";


  bird :  Bird;
  sounds : [string, string][] = []
  videoLink : string = "";

  birdImages : string[] = []
  currentSlide : number = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.birdImages.length;
  }

  prevSlide() {
    let index = (this.currentSlide - 1) % this.birdImages.length;
    this.currentSlide =  index < 0 ? -index : index;
  }

  getImage() : string{
    return this.birdImages[this.currentSlide];
  }

  goToGallery(){
    this.birdRouter.navigate(['gallery']);
  }

}
