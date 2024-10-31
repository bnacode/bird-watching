import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BirdsComponent } from './birds/birds.component';
import { BirdInfoComponent } from './bird-info/bird-info.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SoundMenuComponent } from './sound-menu/sound-menu.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    BirdsComponent,
    IndexComponent,
    BirdInfoComponent,
    SoundMenuComponent,
    ColorPaletteComponent,
    ImageUploadComponent,
    GalleryComponent,
    AdminLoginComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
