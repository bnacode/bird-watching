import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  @Input() bird: string;

  constructor(private imageService : ImageService) { }

  ngOnInit(): void {
  }

  
  choosen: boolean = false;
  
  handleBirdImages(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      // Use a spread operator to convert the FileList to an array
      this.images = [...event.target.files];
      this.choosen = true;
    }
  }
  
  images: File[] = [];
  uploadImages(){

    let formData = new FormData();
    let imageNames = [];

    for (let i = 0; i < this.images.length; i++) {
      const uniqueIdentifier = Date.now() + '-' + Math.random().toString(36).substring(7);

    const normalizedName = this.bird.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filename = normalizedName + '_' + uniqueIdentifier + '-' + this.images[i].name;
    imageNames.push(filename);

    formData.append('images', this.images[i], filename);
    }

    formData.append('birdName', this.bird);

    this.imageService.uploadImages(formData).subscribe(
      resp=> {
        if(resp['message'] == "Images uploaded successfully"){
          
          this.imageService.updateBirdImages(this.bird, imageNames).subscribe(
            resp =>{
              alert("Slika uspešno dodata");
            }
          )
        }
        else
          alert("greska kod uploadovanja slike")
      }
    )
  }
}
