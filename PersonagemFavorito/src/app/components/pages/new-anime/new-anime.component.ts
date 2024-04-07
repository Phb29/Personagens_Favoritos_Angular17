import { Component, OnInit } from '@angular/core';
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-new-anime',
  templateUrl: './new-anime.component.html',
  styleUrl: './new-anime.component.scss'
})
export class NewAnimeComponent implements OnInit {
  btnText = 'Compartilhar'
  constructor(private mommetService:MomentService) { }

  ngOnInit(): void {
  }
  async createHandler(moment: Moment) {

    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    if (moment.image) {
      formData.append('image', moment.image)
    }

   await this.mommetService.createMoment(formData).subscribe();

  }


}
