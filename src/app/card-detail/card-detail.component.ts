import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/shared/model/card.model';
import { SelectedCardService } from 'src/shared/service/selected-card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  public test = "https://images.ygoprodeck.com/images/cards/83764719.jpg";
  public selectedCard : Card = {
    Name: "Erreur",
    Type: "Erreur",
    Image: "Erreur"
};
  constructor(private readonly selectedCardService: SelectedCardService) { }

  ngOnInit(): void {
    this.selectedCard = this.selectedCardService.getSelectedCard();
  }

}
