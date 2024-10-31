import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BirdInfoComponent } from './bird-info/bird-info.component';
import { BirdsComponent } from './birds/birds.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "bird-info", component: BirdInfoComponent},
  {path: "birds", component: BirdsComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "admin-login", component: AdminLoginComponent},
  {path: "admin", component: AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
