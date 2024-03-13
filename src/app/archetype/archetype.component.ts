import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
}
