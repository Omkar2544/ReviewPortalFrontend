import { reply } from "./reply";

export interface review{
    rid: number;
    fk_userid: number;
    fk_itemid: number;
    rating:number;
    review:string;
    creationtime:string;
    fk_username: string;
    replyEntity:reply[];
}