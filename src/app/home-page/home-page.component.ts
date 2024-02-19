import { Component, OnInit } from '@angular/core';
import { Card } from 'src/shared/model/card.model';
import { CardService } from 'src/shared/service/card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public banger : Card[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
