import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewAnimeComponent } from './components/pages/new-anime/new-anime.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'animes/new',component:NewAnimeComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
