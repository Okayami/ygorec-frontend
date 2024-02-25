import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardMini } from 'src/shared/model/card-mini.model';
import { Card } from 'src/shared/model/card.model';
import { CardService } from 'src/shared/service/card.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.css']
})
export class TopCardsComponent implements OnInit {

  public topCards : CardMini[] = [];
  public limit : number = 30;
  constructor(private readonly cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.cardService.getTopCards(this.limit).subscribe((reponse) => {
      this.topCards = reponse.data;
    })
  }

  goToCard(item: CardMini): void {
    this.router.navigate(['/card-detail/', item.ID]);
  }

  loadMore(): void {
    this.limit = this.limit + 30;
    this.cardService.getTopCards(this.limit).subscribe((reponse) => {
      this.topCards = reponse.data;
    })
  }

}
