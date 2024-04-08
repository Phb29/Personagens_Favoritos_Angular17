import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from '../../../Moments';
import { environment } from '../../../../environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommentService } from '../../../services/comment.service';
import { Comment } from '../../../Comment'
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

  commetForm!: FormGroup
  constructor(private momenteService: MomentService, private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router, private commentSevice: CommentService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momenteService.getMoment(id).subscribe(item => this.moment = item.data);

    this.commetForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
    })
  }
  get text() {
    return this.commetForm.get('text');
  }
  get username() {
    return this.commetForm.get('username');
  }
  async removeHandler(id: number) {
    await this.momenteService.removeMoment(id).subscribe()

    this.messagesService.add("Excluido Com Sucesso")

    this.router.navigate(['/'])
  }
  async onSubmit(formreactive: FormGroupDirective) {
    if (this.commetForm.invalid) {
      return
    }
    const data: Comment = this.commetForm.value

    data.momentId = Number(this.moment!.id)
    await this.commentSevice.createComment(data).subscribe((comment) => this.moment!.comments!.push(comment.data))
    this.messagesService.add('Comentário adiconado')

    this.commetForm.reset();

formreactive.resetForm();
  }
}
