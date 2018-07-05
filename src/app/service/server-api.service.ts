import { Injectable } from "@angular/core";

import { WhttpClient, IHttpOptions } from '../utils/whttp-client';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Config } from '../Config';

@Injectable()
export class ServerApiService {
	
	private baseUrl:string = Config.serverUrl;

	private headers:HttpHeaders = new HttpHeaders( { 'Content-type': 'application/json', 'x-api-key' : Config.x_apiKey } );
	private responseType:'arraybuffer' = 'arraybuffer';

	constructor(private httpClient:WhttpClient) {

	}
	
	public login(accountInfo: {userId:string, userPw:string}): Observable<IResponse> {
		const url:string = Config.serverUrl + "login";
		
		const httpOptions:IHttpOptions = {
			headers : this.headers,
			responseType : this.responseType
		}
	
		return this.post(url, accountInfo, httpOptions, "login");
	}
	
	public addTask(task:{title:string, content:string, attach:string}): Observable<IResponse> {
		const url:string = Config.serverUrl + "tasks";
	
		const httpOptions:IHttpOptions = {
			headers : this.headers,
			responseType : this.responseType
		}
	
		return this.post(url, task, httpOptions, "addTask");
	}
	
	private get(url:string, httpOptions:IHttpOptions, operationName:string):Observable<IResponse> {
		return this.httpClient.requestGet(url, httpOptions, operationName);
	}
	
	private put(url:string, body:any, httpOptions:IHttpOptions, operationName:string):Observable<IResponse> {
		return this.httpClient.requestPut(url, body, httpOptions, operationName);
	}
	
	private post(url:string, body:any, httpOptions:IHttpOptions, operationName:string):Observable<IResponse> {
		return this.httpClient.requestPost(url, body, httpOptions, operationName);
	}
	
	private delete(url:string, httpOptions:IHttpOptions, operationName:string):Observable<IResponse> {
		return this.httpClient.requestDelete(url, httpOptions, operationName);
	}
}

export interface IResponse {
	result: 'ok' | 'fail';
	data:any;
}