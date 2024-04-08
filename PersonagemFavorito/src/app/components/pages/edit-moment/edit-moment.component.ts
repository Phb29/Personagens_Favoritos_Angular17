import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.scss'
})
export class EditMomentComponent implements OnInit {
moment!:Moment;
btnText:string='editar';
  
constructor(private momentService:MomentService,private route:ActivatedRoute ){}
ngOnInit(): void {
   const id=Number(this.route.snapshot.paramMap.get("id"))

this.momentService.getMoment(id).subscribe((item)=>{
this.moment= item.data
})
  }

}
