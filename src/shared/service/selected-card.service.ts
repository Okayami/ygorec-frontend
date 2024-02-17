import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "../model/card.model";

@Injectable({
    providedIn: 'root'
})
 export class SelectedCardService {
    public selectedCard : Card = {
        Name: "Error",
        Type: "Error",
        Image: "Error"
    };

    constructor() {}

    getSelectedCard(): Card {
        return this.selectedCard;
    }

    updateSelectedCard(newCard : Card): void {
        this.selectedCard = newCard;
    }
 }