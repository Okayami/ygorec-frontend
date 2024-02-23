import { CardMini } from "./card-mini.model";
import { Card } from "./card.model";

export interface APIResponse {
    statusCode: number,
    method: string,
    message: string,
    data: any
}