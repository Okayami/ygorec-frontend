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
  public cardId : number = 0;
  public selectedCard : Card = {
    ID: 12,
    Name: "",
    Desc: "",
    Attribute: "",
    Image: ""
}

  constructor(private readonly cardService: CardService, private router: ActivatedRoute,) {}
  ngOnInit(): void {
    this.currentURL = window.location.href;
    this.cardId = Number(this.currentURL.substring(this.currentURL.lastIndexOf("/") + 1, this.currentURL.length));
    this.cardService.getWithId(this.cardId).subscribe((card) => {
      this.selectedCard = card.data;
      this.selectedCard.Image = "https://images.ygoprodeck.com/images/cards/" + this.cardId + ".jpg";
    });
    
  }
}
