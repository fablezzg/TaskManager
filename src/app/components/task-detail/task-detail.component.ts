import { Component, OnInit } from '@angular/core';
import { ServerApiService, IResponse, ITaskDetail } from "../../service/server-api.service";

@Component( {
	selector: 'app-task-detail',
	templateUrl: './task-detail.component.html',
	styleUrls: ['./task-detail.component.css']
} )
export class TaskDetailComponent implements OnInit {
	
	protected title:string;
	protected content:string;
	
	public readonly:boolean = true;
	
	constructor(private serverApiService:ServerApiService) {
		
	}

	ngOnInit() {
		this.serverApiService.getTaskDetail("TSK-5FKJJ9RK5BT").take(1).subscribe((response:IResponse) => {
			let data:ITaskDetail[] = response.data;
		
			console.log("[TaskDetailComponent] data : ", response);
		
			if(data.length > 0) {
				this.content = data[0].content;
				this.title = data[0].title;
			}
			
			
			
		});
	}
	
	public onClickEdit():void {
		
	}

}
