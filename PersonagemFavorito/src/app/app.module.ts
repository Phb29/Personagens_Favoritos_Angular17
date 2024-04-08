import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewAnimeComponent } from './components/pages/new-anime/new-anime.component';
import { AnimeFormComponent } from './components/anime-form/anime-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { MessagesComponent } from './component/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentComponent } from './componnts/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewAnimeComponent,
    AnimeFormComponent,
    MessagesComponent,
    MomentComponent,
    EditMomentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 HttpClientModule,
 FontAwesomeModule,

  ],
  providers: [
    provideClientHydration()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
