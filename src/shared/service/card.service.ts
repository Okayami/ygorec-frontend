import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "../model/card.model";
import { Observable } from "rxjs";
import { APIResponse } from "../model/api-reponse.model";

@Injectable({
    providedIn: 'root'
})
 export class CardService {
    public selectedCard : Card = {
        ID: 0,
        Label: "Error",
        Url: "Error"
    };
    
    private baseUrl = 'https://ygorec.up.railway.app/api';
    constructor(private http: HttpClient) {}

    getSelectedCard(): Observable<APIResponse> {
        return this.http.get<APIResponse>(`https://ygorec.up.railway.app/api/typeahead?q=loop`);
    }
    
    updateSelectedCard(newCard : Card): void {
        this.selectedCard = newCard;
    }
 }