import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import  "rxjs/add/operator/retry";
import  "rxjs/add/operator/timeout";
import  "rxjs/add/operator/catch";
import  "rxjs/add/operator/finally";
import  "rxjs/add/operator/take";
import { Log } from "../utils/Log";

export interface IHttpOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'arraybuffer';
    withCredentials?: boolean;
}

interface Responsible { (response:any, operationName:string):void }

const TIMEOUT:number = 40 * 1000;

@Injectable()
export class WhttpClient {

	constructor( private httpClient: HttpClient) {
		Log.l("WhttpClientService constructor()");
	}
	
	public responsible:Responsible = (response:any, operationName:string) => {
		Log.i( operationName + " : ", response );
		if ( response.result == "fail" ) {
			this.resultError( operationName, response )
		}
	}
	
	public pipe(observable:Observable<any>, operationName):Observable<any> {
		return observable.pipe(
			tap( (response:any) => this.responsible(response, operationName) )
		)
		.retry(2)
		.timeout(TIMEOUT)
		.catch(this.handleError<any>( operationName ))
		.finally(() => {
//			this.loadingBar.hide();
		});
	}
	
	public requestGet(url:string, httpOptions:IHttpOptions, operationName:string):Observable<any> {
		return this.pipe(this.httpClient.get<any>( url, httpOptions as any), operationName);
	}

	public requestPut(url:string, body:any | null, httpOptions:IHttpOptions, operationName:string):Observable<any> {
		return this.pipe(this.httpClient.put<any>( url, (body instanceof FormData) ? body : JSON.stringify( body ), httpOptions as any), operationName);
	}

	public requestPost(url:string, body:any, httpOptions:IHttpOptions, operationName:string):Observable<any> {
		return this.pipe(this.httpClient.post<any>( url, (body instanceof FormData) ? body : JSON.stringify( body ), httpOptions as any), operationName);
	}

	public requestDelete(url:string, httpOptions:IHttpOptions, operationName:string):Observable<any> {
		return this.pipe(this.httpClient.delete<any>( url, httpOptions as any), operationName);
	}
	
	private resultError( operationName: string, data: any ): void {
		console.info( `${operationName} result fail!! : `, data );
	}
	
	private handleError<T>( operationName: string, result?: T ) {
		return ( error: any ): Observable<T> => {
			Log.l( `${operationName} failed: ${error.message}` );
			return of( result as T );
		}
	}

}
