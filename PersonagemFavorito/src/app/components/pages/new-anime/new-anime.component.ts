import { Component, OnInit } from '@angular/core';
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-anime',
  templateUrl: './new-anime.component.html',
  styleUrl: './new-anime.component.scss'
})
export class NewAnimeComponent implements OnInit {
  btnText = 'Compartilhar'
  constructor(private mommetService: MomentService, 
    private messageService: MessagesService,
private router:Router) { }

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

    this.messageService.add('Momento adiconado com sucesso');
     this.router.navigate(['/'])
  }


}
