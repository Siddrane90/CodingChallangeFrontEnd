import { Observable } from "rxjs";
export type ParamsType = { hideLoader: boolean }
export interface IApiBaseActions 
{
    Get(url: string, body?: string): Observable<any>;
    
    GetAll(url: string, body?: string): Observable<any>;

    Post(url: string, body?:string): Observable<any>;

    Put(url: string, body?: string): Observable<any>;

    Delete(url: string, body?: string): Observable<any>;
}
