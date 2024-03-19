import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardMini } from "../model/card-mini.model";
import { Observable } from "rxjs";
import { APIResponse } from "../model/api-reponse.model";

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private baseUrl = 'https://ygorec.up.railway.app/api';
    constructor(private http: HttpClient) { }

    get(cardName: string): Observable<APIResponse> {
        return this.http.get<APIResponse>(this.baseUrl + `/typeahead?q=` + cardName);
    }

    getWithId(cardId: number): Observable<APIResponse> {
        return this.http.get<APIResponse>(this.baseUrl + `/cards/` + cardId);
    }

    getTopCards(limit: number, offset: number, banlist: number): Observable<APIResponse> {
        if (banlist === 0) {
            return this.http.get<APIResponse>(this.baseUrl + `/cards?limit=` + limit + `&offset=` + offset);
        }
        return this.http.get<APIResponse>(this.baseUrl + `/cards?limit=` + limit + `&offset=` + offset + '&banlist=2024-01-01');
    }

    getPlayedCards(limit: number, offset: number, id: number): Observable<APIResponse> {
        return this.http.get<APIResponse>(this.baseUrl + `/cards?limit=` + limit + `&offset=` + offset +  '&card_id=' + id);
    }

    getArchetypes(limit: number, offset: number): Observable<APIResponse> {
        return this.http.get<APIResponse>(this.baseUrl + `/archetypes?limit=` + limit + `&offset=` + offset);
    }

    getArchetypeDetail(name: string): Observable<APIResponse> {
        return this.http.get<APIResponse>(this.baseUrl + `/archetypes/` + name);
    }
}