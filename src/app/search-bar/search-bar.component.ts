import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardMini } from 'src/shared/model/card-mini.model';
import { CardService } from 'src/shared/service/card.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router, private readonly cardService: CardService) { }

  public cards: CardMini[] = [];
  keyword = 'Label';

  ngOnInit(): void {}

  selectEvent(item: any) {
    this.router.navigate(['/card-detail/', item.ID]);
  }

  onChangeSearch(item: string) {
    if (item.length > 2) {
      this.cardService.get(item.toLocaleLowerCase()).subscribe((cards) => {
        this.cards = (cards.data);
      });
    } else {
      this.cards = [];
    }
  }
}
