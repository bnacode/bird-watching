import { Component, OnInit } from '@angular/core';
import { BirdService } from '../services/bird.service';
import { BirdImages } from '../models/birdImages';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private birdService : BirdService) { }

  ngOnInit(): void {
    this.birdService.getAllBirdImages().subscribe((data : BirdImages[]) =>{
      this.birdImages = data;
    })

  }

  birdImages : BirdImages[] = []

  deleteImage(image : string, bird : BirdImages){
    bird.slike = bird.slike.filter((str) => str !== image);
    this.birdService.updateBirdImageFromAdmin(bird).subscribe(()=>{})
  }

  acceptImage(image : string, bird : BirdImages){
    bird.slike = bird.slike.filter((str) => str !== image);
    bird.accepted.push(image);
    this.birdService.updateBirdImageFromAdmin(bird).subscribe(()=>{})
  }
}
