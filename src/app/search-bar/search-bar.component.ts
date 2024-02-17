import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/shared/model/card.model';
import { SelectedCardService } from 'src/shared/service/selected-card.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  constructor(private router: Router, private readonly selectedCardService: SelectedCardService) {
    
  }

  keyword = 'name';
  public cards = [
    {
      name: 'Insecte Mangeur d Homme',
    },
    {
      name: 'Monster Reborn',
    },
    {
      name: 'Trappe',
    }
  ];

    selectEvent(item: any) {
      this.router.navigate(['/card-detail/', item.name.replaceAll(" ", "-")]);
  }
}
