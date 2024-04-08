import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute } from '@angular/router';
import { Moment } from '../../../Moments';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.scss'
})
export class MomentComponent implements OnInit {


  moment?: Moment;
  constructor(private momenteService: MomentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momenteService.getMoment(id).subscribe(item => this.moment = item.data)
  }

}
