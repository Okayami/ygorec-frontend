import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/shared/model/card.model';
import { CardService } from 'src/shared/service/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  public currentURL: string = "";
  public cardName : string = "";
  public cards : Card[] = [];

  constructor(private readonly cardService: CardService, private router: ActivatedRoute,) {}
  ngOnInit(): void {
    this.cardService.getSelectedCard().subscribe((cards) => {
      this.cards = (cards.data);
      this.cards[0].Url = "https://images.ygoprodeck.com/images" + this.cards[0].Url + ".jpg";
    });
    
    this.currentURL = window.location.href;
    this.cardName = this.currentURL.substring(this.currentURL.lastIndexOf("/") + 1, this.currentURL.length);
    this.cardName = this.cardName.replace(/-/g, " ");
  }
}
