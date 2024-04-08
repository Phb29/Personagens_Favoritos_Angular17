import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  faSearch = faSearch;
  SearchTerm: string = '';
  AllMoment: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl
  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMomments().subscribe((itens) => {
      const data = itens.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });
      this.AllMoment = data;
      this.moments = data;

    });
  }
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.AllMoment.filter((moment) => {

      return moment.title.toLocaleLowerCase().includes(value);
    });
  }
}
