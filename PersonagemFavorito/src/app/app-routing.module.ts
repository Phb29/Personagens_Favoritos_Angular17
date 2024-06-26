import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewAnimeComponent } from './components/pages/new-anime/new-anime.component';
import { MomentComponent } from './componnts/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'animes/new',component:NewAnimeComponent},
{path:'animes/edit/:id',component:EditMomentComponent},
{path:'animes/:id',component:MomentComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
