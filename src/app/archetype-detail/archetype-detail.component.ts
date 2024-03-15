import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchetypeCard } from 'src/shared/model/archetype-cards.model';
import { CardService } from 'src/shared/service/card.service';

@Component({
  selector: 'app-archetype-detail',
  templateUrl: './archetype-detail.component.html',
  styleUrls: ['./archetype-detail.component.css']
})
export class ArchetypeDetailComponent implements OnInit {

  public currentURL: string = "";
  public archetypeName: string = "";
  public archetypeCards: ArchetypeCard[] = [];
  public totalDeck: Number = 0;

  constructor(private readonly cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.currentURL = window.location.href;
    this.archetypeName = this.currentURL.substring(this.currentURL.lastIndexOf("/") + 1, this.currentURL.length);
    this.cardService.getArchetypeDetail(this.archetypeName).subscribe((reponse) => {
      this.totalDeck = Number(reponse.data.DeckAmount);
      this.archetypeCards = reponse.data.ArchetypeCards;
    })
  }

  goToCard(item: ArchetypeCard): void {
    this.router.navigate(['/card-detail/', item.ID]);
  }
}
