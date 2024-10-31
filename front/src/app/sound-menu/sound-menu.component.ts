import { Component, Input } from '@angular/core';
import { SoundService } from '../services/sound.service';
import { MatIconModule } from '@angular/material/icon';
import { Bird } from '../models/bird';



@Component({
  selector: 'app-sound-menu',
  templateUrl: './sound-menu.component.html',
  styleUrls: ['./sound-menu.component.css']
})


export class SoundMenuComponent {
  @Input() sounds: [string, string][] = []; // Input to accept an array of sound URLs
  @Input() video: string;
  selectedSound: string | null = null; // Property to store the selected sound URL

  constructor(private soundService: SoundService) {}

  ngOnInit(){
    this.audio = new Audio();
  
  }

  ngOnDestroy(){
     this.audio.pause();
  }

  audio: HTMLAudioElement | null = null;

  mp3Link : string;

  playSound(url: string): void {
    
       this.soundService.getAudio(url).subscribe((res) => {
    
          this.mp3Link = res['mp3Link'];

          this.audio.pause();

          // Set the new audio source
          this.audio.src = this.mp3Link;

          // Play the audio
          this.audio.play();

       });
  }

  pauseAudio(){
    this.audio.pause();
  }


  
  






}
