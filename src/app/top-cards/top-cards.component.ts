import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardList } from 'src/shared/model/card-list';
import { Card } from 'src/shared/model/card.model';
import { CardService } from 'src/shared/service/card.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.css']
})
export class TopCardsComponent implements OnInit {

  public topCards: CardList[] = [];
  public limit: number = 30;
  public offset: number = 0;
  constructor(private readonly cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.cardService.getTopCards(this.limit, this.offset).subscribe((reponse) => {
      this.topCards = reponse.data;
    })
  }

  goToCard(item: CardList): void {
    this.router.navigate(['/card-detail/', item.ID]);
  }

  loadMore(): void {
    this.offset = this.offset + 30;
    this.cardService.getTopCards(this.limit, this.offset).subscribe((reponse) => {
      reponse.data.forEach((currentValue: Card, index: number) => {
        this.topCards.push(reponse.data[index]);
      });
    })
  }

}
