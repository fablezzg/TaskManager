import { Injectable } from "@angular/core";

import { WhttpClient, IHttpOptions } from './whttp-client';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Config } from '../Config';

@Injectable()
export class ServerApiService {
	
	private baseUrl:string = Config.serverUrl;

	private headers:HttpHeaders = new HttpHeaders( { 'Content-type': 'application/json', 'x-api-key' : Config.x_apiKey } );
	private responseType:'arraybuffer' = 'arraybuffer';

	private CONTENT_TYPE:string = "multipart/form-data";
	private ACCEPT:string = "application/json";
	private USER_ID:string = "cwchoi@welgate.com";
	private ACCESS_TOKEN:string = "12345";

	constructor(private httpClient:WhttpClient) {

	}
	
	public login(accountInfo: {userId:string, userPw:string}): Observable<IResponse> {
		const url:string = Config.serverUrl + "login";
		
		const httpOptions:IHttpOptions = {
			headers : this.headers
		}
	
		return this.post(url, accountInfo, httpOptions, "login");
	}
	
	public getTaskDetail(taskId:string): Observable<IResponse> {
		const url:string = Config.serverUrl + "tasks/" + taskId;
	
		const httpOptions:IHttpOptions = {
				headers : new HttpHeaders( { 'Content-type': this.CONTENT_TYPE, 'user-id' : this.USER_ID, 'access-token' : this.ACCESS_TOKEN })
		}
	
		return this.get(url, httpOptions, "getTask");
	}
	
	public addTask(task:{title:string, content:string, attach?:File[]}): Observable<IResponse> {
		const url:string = Config.serverUrl + "tasks";
	
		let formData:FormData = new FormData();
	
		formData.append("title", task.title);
		formData.append("content", task.content);
		
		if(task.attach && task.attach.length > 0) {
			for(let file of task.attach) {
				formData.append("attach", file, file.name);
			}
		}
	
		const httpOptions:IHttpOptions = {
				headers : new HttpHeaders( { 'user-id' : this.USER_ID, 'access-token' : this.ACCESS_TOKEN })
		}
	
		return this.post(url, formData, httpOptions, "addTask");
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

export type Result = "OK" | "FAIL";

export type ResponseData = ITaskDetail[];

export interface IResponse {
	result: Result;
	data:ResponseData;
}

export interface ITaskDetail {
	task_id:string;
	task_owner_id:string;
	parent_task_id:string;
	title:string;
	content:string;
}

export interface IProject {
	title: string;
	content: string;
	attach: string;
	due_date: string;
	handers: [{ user_id:string; due_date:string; comment: string; }];
	task_state: string;
	reg_date: string;
	task_id: string;
	writer: string;
}
