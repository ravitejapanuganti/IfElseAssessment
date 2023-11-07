import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-top-data-cards',
  templateUrl: './top-data-cards.component.html',
  styleUrls: ['./top-data-cards.component.scss']
})
export class TopDataCardsComponent implements OnInit{
  topCards: any;
  data : any;
  iconList = ['fa fa-solid fa-xl fa-music text-white', 'fa fa-xl fa-chart-pie text-white', 'fa fa-xl fa-download text-white', 'fa fa-rotate fa-xl text-white'];
  constructor(private service: ServiceService) {}

  ngOnInit(){
    setTimeout(() => {
      this.service.getData().subscribe((response) => {
        this.data = response;
        this.topCards = this.data.top_cards;
      });
    }, 100);
  }
}
