import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

import { MatGridList } from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('gridList') gridList: MatGridList;
  @ViewChild('carouselContainer') carouselContainer: ElementRef;

  @ViewChild('scrollableCardsType') scrollableCardsType: ElementRef; // Use a unique name
  @ViewChild('scrollableCardsArea') scrollableCardsArea: ElementRef; // Use a unique name



  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  birdTypes : string[] =  ["Pretraži sve oblike", "Čaplju ili rodu", "Detlića", "Grabljivicu", 
                           "Galeba", "Goluba", "Fazana ili kokošku", "Lastu", "Patku ili labuda",
                           "Vrapca", "Barsku koku", "Sovu", "Vranu"];

  birdArea : string[] = ["Pretraži sve predele", "U naselju", "Na njivi", "U šumi", "Pored litica i kamenja",
                         "Na livadi", "Pored vode", "U žbunju", "U mešovitom predelu"];                        


  selectedColors: string[] = [];
  translatedColors: string[] = [];

  handleColorsSelected(colors: string[]) {
    this.selectedColors = colors;
    //console.log('Selected Colors:', this.selectedColors);
  }


  selectedArea : string = "";
  selectedType : string = "";

  selectType(type : string){
    if(this.selectedType == type)
      this.selectedType = "";
    else
    this.selectedType = type;
  }

  selectArea(area : string){
    if(this.selectedArea == area)
      this.selectedArea = "";
    else
      this.selectedArea = area;
  }



  colorTranslations = {
    'green': 'zelena',
    'blue': 'plava',
    'red': 'crvena',
    'orange': 'narandzasta',
    'yellow': 'zuta',
    'white': 'bela',
    'grey': 'siva',
    'burlywood': 'bez',
    'brown': 'braon',
    'black': 'crna'
  };
  
  getTypeIcon(bird : string) : string{
    switch (bird) {
      case "Pretraži sve oblike":
        return "svi_oblici.png"
      case "Čaplju ili rodu":
        return "roda.png"
      case "Detlića":
        return "detlic.png"
      case "Grabljivicu":
        return "soko.png"
      case "Galeba":
        return "galeb.png"
      case "Goluba":
        return "golub.png"
      case "Fazana ili kokošku":
        return "fazan.png"
      case "Lastu":
        return "lasta.png"
      case "Patku ili labuda":
        return "patka.png"
      case "Vrapca":
        return "vrabac.png"
      case "Barsku koku":
        return "barska_koka.png"
      case "Sovu":
        return "sova.png"
      case "Vranu":
        return "vrana.png"
      default:
        return "default.png"
    }
    
  }

  getAreaIcon(location : string) : string{
    switch (location) {
      case "Pretraži sve predele":
          return "predeli.png";
      case "U naselju":
          return "naselje.png";
      case "Na njivi":
          return "njiva.png";
      case "U šumi":
          return "suma.png";
      case "Pored litica i kamenja":
          return "litica_kamenjar.png";
      case "Na livadi":
          return "livada.png";
      case "Pored vode":
          return "voda.png";
      case "U žbunju":
          return "zbun.png";
      case "U mešovitom predelu":
          return "predeli.png";
      default:
          return "predeli.png";
  }
  }


  searchBirds(){
    this.translatedColors = this.selectedColors.map((color) => this.colorTranslations[color]);
    localStorage.setItem("colors", JSON.stringify(this.translatedColors));
    let type;

    if(this.selectedArea != "" && this.selectedType != ""){
      type = "tip i staniste";
    }
    else if(this.selectedArea != ""){
      type = "staniste";
    }
    else if(this.selectedType != ""){
      type = "tip";
    }
    else{
      type = "tip i staniste";
      this.selectedArea = "Pretraži sve predele";
      this.selectedType = "Pretraži sve oblike"
    }
    localStorage.setItem("type", this.selectedType);
    localStorage.setItem("area", this.selectedArea);
    this.router.navigate(['birds'], { queryParams: { type } });
  }

  scrollLeftType(): void {
    const container = this.scrollableCardsType.nativeElement;
    container.scrollLeft -= 320; // Adjust the scroll distance to match card width
  }

  scrollRightType(): void {
    const container = this.scrollableCardsType.nativeElement;
    container.scrollLeft += 320; // Adjust the scroll distance to match card width
  }

  scrollLeftArea(): void {
    const container = this.scrollableCardsArea.nativeElement;
    container.scrollLeft -= 320; // Adjust the scroll distance to match card width
  }

  scrollRightArea(): void {
    const container = this.scrollableCardsArea.nativeElement;
    container.scrollLeft += 320; // Adjust the scroll distance to match card width
  }

}


