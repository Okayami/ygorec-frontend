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
    constructor(private http: HttpClient) {}

    get(): Observable<APIResponse> {
        return this.http.get<APIResponse>(this.baseUrl + `/typeahead`);
    }

    getWithId(cardId: number): Observable<APIResponse> {
        return this.http.get<APIResponse>(this.baseUrl + `/cards/` + cardId);
    }
 }