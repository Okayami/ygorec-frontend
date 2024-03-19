import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchetypeMini } from 'src/shared/model/archetype-mini.model';
import { Archetypes } from 'src/shared/model/archetypes.model';
import { CardService } from 'src/shared/service/card.service';

@Component({
  selector: 'app-archetype',
  templateUrl: './archetype.component.html',
  styleUrls: ['./archetype.component.css']
})
export class ArchetypeComponent implements OnInit {

  public limit: number = 20;
  public offset: number = 0;
  public archetypes: Archetypes[] = [];
  public cards: ArchetypeMini[] = [];
  keyword = 'Label';


  constructor(private readonly cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.cardService.getArchetypes(this.limit, this.offset).subscribe((reponse) => {
      this.archetypes = reponse.data;
    })
  }

  loadMore(): void {
    this.offset = this.offset + 20;
    this.cardService.getArchetypes(this.limit, this.offset).subscribe((reponse) => {
      reponse.data.forEach((currentValue: Archetypes, index: number) => {
        this.archetypes.push(reponse.data[index]);
      });
    })
  }

  goToCard(item: Archetypes): void {
    this.router.navigate(['/archetype-detail/', item.Url.substring(item.Url.lastIndexOf("/") + 1, item.Url.length)]);
  }

  selectEvent(item: any) {
    this.router.navigate(['/archetype-detail/', item.Url.substring(item.Url.lastIndexOf("/") + 1, item.Url.length)]);
  }

  onChangeSearch(item: string) {
    if (item.length > 2) {
      this.cardService.searchArchetype(item.toLocaleLowerCase()).subscribe((cards) => {
        this.cards = (cards.data);
      });
    } else {
      this.cards = [];
    }
  }

}
