import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BirdService } from '../services/bird.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private birdService : BirdService, private router : Router) { }

  ngOnInit(): void {
  }

  username: string ="";
  password: string ="";
  error: string = "";


  login(){
    if(!this.username.trim() || !this.password.trim())
      this.error = "Pogrešni kredencijali"
    else{
      this.birdService.loginAdmin(this.username, this.password).subscribe(admin =>{
        if(admin){
          this.router.navigate(['admin']);
        }
        else{
          this.error = "Pogrešni kredencijali"
        }
      })
  }


}
back(){
  this.router.navigate(['']);
}

}
