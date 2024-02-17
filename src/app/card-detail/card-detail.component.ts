import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/shared/model/card.model';
import { SelectedCardService } from 'src/shared/service/selected-card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  public currentURL: string = "";
  public cardName : string = "";

  public selectedCard : Card = {
    Name: "Erreur",
    Type: "Erreur",
    Image: "Erreur"
};
  constructor(private readonly selectedCardService: SelectedCardService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentURL = window.location.href;
    this.cardName = this.currentURL.substring(this.currentURL.lastIndexOf("/") + 1, this.currentURL.length);
    this.cardName = this.cardName.replace(/-/g, " ");
    this.selectedCard = {
      Name: this.cardName,
      Type: "Magic",
      Image: "https://images.ygoprodeck.com/images/cards/83764719.jpg"
    }
  }
}
