import { Component, OnInit } from '@angular/core';
import { Bird } from '../models/bird';
import { BirdImages } from '../models/birdImages';
import { ImageService } from '../services/image.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private imageService : ImageService, private http: HttpClient) { }

  ngOnInit(): void {

    this.bird = JSON.parse(localStorage.getItem('bird'));

    this.imageService.getBirdImageObject(this.bird.naziv).subscribe((response: any) => {
      this.birdImages = response; // Change 'resp' to 'response'
      
    });

  }


  bird : Bird;
  birdImages : BirdImages;




}
