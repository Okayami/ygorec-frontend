import { Component, OnInit } from '@angular/core';
import { Card } from 'src/shared/model/card.model';
import { CardService } from 'src/shared/service/card.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.css']
})
export class TopCardsComponent implements OnInit {

  public topCards : Card[] = [];
  constructor(private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getTopCards().subscribe((reponse) => {
      this.topCards = reponse.data;
    })
  }

}
