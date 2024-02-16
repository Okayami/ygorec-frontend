import { Component, OnInit } from '@angular/core';
import { Card } from 'src/shared/model/card.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {
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
    // do something with selected item
  }
}
