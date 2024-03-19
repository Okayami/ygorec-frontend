import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { CardList } from 'src/shared/model/card-list';
import { Card } from 'src/shared/model/card.model';
import { CardService } from 'src/shared/service/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  public currentURL: string = "";
  public cardId: number = 0;
  public playedCards: CardList[] = [];
  public totalDeck: number = 0;
  public limit: number = 30;
  public offset: number = 0;
  public selectedCard: Card = {
    ID: 0,
    Name: "",
    Desc: "",
    Attribute: "",
    Race: "",
    Atk: "",
    Def: "",
    Types: [],
    Image: "",
    Symbol: "",
    Limitation: 0,
    Level: ""
  }

  constructor(private readonly cardService: CardService, private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.selectedCard = {
          ID: 0,
          Name: "",
          Desc: "",
          Attribute: "",
          Race: "",
          Atk: "",
          Def: "",
          Types: [],
          Image: "",
          Symbol: "",
          Limitation: 0,
          Level: ""
        }
        this.cardId = 0;
        this.playedCards = [];
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    console.log("start");
    console.log(window.location.href);
    this.currentURL = window.location.href;
    if (this.cardId == 0) {
      this.cardId = Number(this.currentURL.substring(this.currentURL.lastIndexOf("/") + 1, this.currentURL.length));
    }
    this.cardService.getWithId(this.cardId).subscribe((card) => {
      this.selectedCard = card.data;
      this.selectedCard.Image = "https://images.ygoprodeck.com/images/cards/" + this.cardId + ".jpg";
      if (this.selectedCard.Types[0] != "Monster") {
        this.selectedCard.Symbol = "assets/Symbol/" + (this.selectedCard.Types[0]).toUpperCase() + ".png";
      } else {
        this.selectedCard.Symbol = "assets/Symbol/" + this.selectedCard.Attribute + ".png";
      }
    });
    this.cardService.getPlayedCards(this.limit, this.offset, this.cardId).subscribe((reponse) => {
      this.playedCards = reponse.data.List;
      this.totalDeck = Number(reponse.data.DeckAmount);
    });
  }

  goToCard(item: CardList): void {
    this.cardId = item.ID;
    this.router.navigate(['/card-detail/', item.ID]);
  }

  loadMore(): void {
    this.offset = this.offset + 30;
    this.cardService.getPlayedCards(this.limit, this.offset, this.cardId).subscribe((reponse)=> {
      reponse.data.List.forEach((currentValue: Card, index: number) => {
        this.totalDeck = Number(reponse.data.DeckAmount);
        this.playedCards.push(reponse.data.List[index]);
      });
    })
  }
}
