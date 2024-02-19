import { Card } from "./card.model";

export interface APIResponse {
    statusCode: number,
    method: string,
    message: string,
    data: Card[]
}