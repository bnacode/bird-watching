import { Component, OnInit } from '@angular/core';
import { Bird } from '../models/bird';
import { BirdService } from '../services/bird.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  constructor(private birdService : BirdService, private router : Router, private route: ActivatedRoute) { }

  ngOnDestroy():void
  {
    localStorage.clear;
  }

  ngOnInit(): void {

    this.selectedColors = JSON.parse(localStorage.getItem("colors"));
    this.searchType = localStorage.getItem('type');
    this.searchArea = localStorage.getItem('area');
    this.route.queryParams.subscribe(params => {
      this.areaOrType = params['type'];
    });

    this.birdService.getAllBirds().subscribe((data : Bird[]) => {

      data.forEach((bird) => {

        if (bird.slika_z) {
          let birdF = { ...bird }; // Creates a shallow copy of the bird object
          //swap images for male and female
          let z = birdF.slika_z;
          birdF.slika_m = birdF.slika_z;
          birdF.slika_z = z;

          if(bird.boja_z){
            //swap colors for male and female if differnt
            let c = birdF.boja_z;
            birdF.boja_m = birdF.boja_z;
            birdF.boja_z = c;
          }

          this.birdList.push(birdF);  
        }

        this.birdList.push(bird);
          
      });
     

      if(this.areaOrType == "tip")
        this.getListOfBirdsByType(this.searchType);
      else if(this.areaOrType == "staniste")
      this.getListOfBirdsByArea(this.searchArea );
      else{
        this.getListOfBirdsByType(this.searchType);
        this.getListOfBirdsByArea(this.searchArea);
      }
    })

    
  }

  birdList : Bird[] = []
  filteredBirds : Bird[] = []
  birdsToShow : Bird[] = []
  searchParam: string;
  searchType : string = "";
  searchArea : string = "";
  areaOrType : string;
  selectedColors : string[];

  getPictureName(bird : Bird) : string{
    return bird.slika_m.split(';')[0];
  }

  goToBirdInfo(bird : Bird){
    localStorage.setItem('bird', JSON.stringify(bird));
    this.router.navigate(['/bird-info']);
  }

  searchByName(): void {
    if (!this.searchParam) {
      //this.filteredBirds = [...this.birdList];
      this.birdsToShow = [...this.filteredBirds];
      return;
    }
  
    const searchTerm = this.searchParam.toLowerCase();
    this.birdsToShow = this.filteredBirds.filter((bird: Bird) => {
      const birdName = bird.naziv ? bird.naziv.toLowerCase() : '';
      const latinName = bird.latinski_naziv ? bird.latinski_naziv.toLowerCase() : '';
      const otherName = bird.drugi_naziv ? bird.drugi_naziv.toLowerCase() : '';
      const family = bird.porodica ? bird.porodica.toLowerCase() : '';
      const engName = bird.engleski_naziv ? bird.engleski_naziv.toLowerCase() : '';
  
      return (
        birdName.includes(searchTerm) ||
        latinName.includes(searchTerm) ||
        otherName.includes(searchTerm) ||
        family.includes(searchTerm) ||
        engName.includes(searchTerm)
      );
    });
  }
  
  
  getListOfBirdsByType(searchParam : string){
    

  switch (searchParam) {
    case "Pretraži sve oblike":
      this.filteredBirds = this.birdList.filter((bird) => {
        return this.hasColor(bird);
      })
      break;

    case "Čaplju ili rodu":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Capljolike ptice")&& this.hasColor(bird);
      })
      break;

    case "Detlića":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Detlici")&& this.hasColor(bird);
      })
      break;

    case "Grabljivicu":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("grabljivice")&& this.hasColor(bird);
      })
      break;

    case "Galeba":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Galebovi i cigre")&& this.hasColor(bird);
      })
      break;

    case "Goluba":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Golubolike ptice")&& this.hasColor(bird);
      })
      break;

    case "Fazana ili kokošku":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Kokosi i droplje")&& this.hasColor(bird);
      })
      break;

    case "Lastu":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Laste i ciope")&& this.hasColor(bird);
      })
      break;

    case "Patku ili labuda":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Patkolike ptice")&& this.hasColor(bird);
      })
      break;

    case "Vrapca":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Ptice pevacice")&& this.hasColor(bird);
      })
      break;

    case "Barsku koku":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Sljukarice i barske koke")&& this.hasColor(bird);
      })
      break;

    case "Sovu":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Sove")&& this.hasColor(bird);
      })
      break;

    case "Vranu":
      this.filteredBirds = this.birdList.filter((bird) => {
        return bird.tip.includes("Vranolike ptice")&& this.hasColor(bird);
      })
      break;

    default:
     // this.filteredBirds = this.birdList;
  }

  this.birdList = this.filteredBirds;
  this.birdsToShow = this.filteredBirds;
  console.log(searchParam + " " + this.filteredBirds.length);
  }


  getListOfBirdsByArea(searchParam : string){
    switch (searchParam) {
      case "Pretraži sve predele":
        this.filteredBirds = this.birdList.filter((bird) => {
          return this.hasColor(bird);
        })
        break;
      case "U naselju":
        this.filteredBirds = this.birdList.filter((bird) => {
          return bird.staniste.includes("naselja") && this.hasColor(bird);
        })
        break;
      case "Na njivi":
        this.filteredBirds = this.birdList.filter((bird) => {
          return bird.staniste.includes("njive")&& this.hasColor(bird);
        })
        break;
      case "U šumi":
        this.filteredBirds = this.birdList.filter((bird) => {
          return bird.staniste.includes("sume")&& this.hasColor(bird);
        })
        break;
      case "Pored litica i kamenja":
        this.filteredBirds = this.birdList.filter((bird) => {
          return bird.staniste.includes("litice i odseci")&& this.hasColor(bird);
        })
        break;
      case "Na livadi":
        this.filteredBirds = this.birdList.filter((bird) => {
          return bird.staniste.includes("travnjaci")&& this.hasColor(bird);
        })
        break;
      case "Pored vode":
        this.filteredBirds = this.birdList.filter((bird) => {
          return bird.staniste.includes("vodena stanista")&& this.hasColor(bird);
        })
        break;
      case "U žbunju":
        this.filteredBirds = this.birdList.filter((bird) => {
          return bird.staniste.includes("sikare i zbunjaci")&&this.hasColor(bird);
        })
        break;
      case "U mešovitom predelu":
        this.filteredBirds = this.birdList.filter((bird) => {
          return bird.staniste.includes("mesovita stanista")&&this.hasColor(bird);
        })
        break;
      default:
        // Code for when none of the above cases match
        break;
    }
    this.birdsToShow = this.filteredBirds;
    console.log(searchParam + " " + this.filteredBirds.length);
  }

  hasColor(bird) : boolean{
    if(this.selectedColors.length == 0)
      return true;

    let hasColor = 0;
    this.selectedColors.forEach((color) =>{
      if(bird.boja_m.includes(color))
      hasColor++;
    })
    return hasColor == this.selectedColors.length? true:false;
  }
}
