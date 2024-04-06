import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrl: './anime-form.component.scss'
})
export class AnimeFormComponent implements OnInit  {
@Input() btnText!:string
constructor(){}

ngOnInit(): void {
  
}
}
