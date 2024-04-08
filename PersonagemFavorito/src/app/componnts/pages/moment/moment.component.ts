import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from '../../../Moments';
import { environment } from '../../../../environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';
@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.scss'
})
export class MomentComponent implements OnInit {

  faTimes = faTimes;
  faEdit = faEdit;

  baseApiUrl = environment.baseApiUrl;

  moment?: Moment;
  constructor(private momenteService: MomentService, private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momenteService.getMoment(id).subscribe(item => this.moment = item.data);
  }
  async removeHandler(id: number ) {
    await this.momenteService.removeMoment(id).subscribe()

    this.messagesService.add("Excluido Com Sucesso")

    this.router.navigate(['/'])
  }
}
