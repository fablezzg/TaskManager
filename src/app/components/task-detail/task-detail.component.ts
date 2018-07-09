import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ServerApiService, IResponse, ITaskDetail } from "../../service/server-api.service";
import { Log } from "../../utils/Log";
import { ActivatedRoute } from "@angular/router";

@Component( {
	selector: 'app-task-detail',
	templateUrl: './task-detail.component.html',
	styleUrls: ['./task-detail.component.css']
} )
export class TaskDetailComponent implements OnInit {
	
	title:string;
	content:string;
	
	constructor(private serverApiService:ServerApiService, private location:Location, private activatedRouter:ActivatedRoute) {
		const mode = this.activatedRouter.snapshot.params["editmode"];
		
		Log.l("[TaskDetailComponent :: constructor]");
	}

	ngOnInit() {
		this.serverApiService.getTaskDetail("TSK-5FKJJ9RK5BT").take(1).subscribe((response:IResponse) => {
			let data:ITaskDetail[] = response.data;
		
			Log.l("[TaskDetailComponent] data : ", response);
		
			if(data.length > 0) {
				this.content = data[0].content;
				this.title = data[0].title;
			}
		});
	}
	
	onClickComplete():void {
		Log.l("[TaskDetailComponent :: onSubmit()] title : " + this.title );
		Log.l("[TaskDetailComponent :: onSubmit()] content : " + this.content );
		
		/*this.serverApiService.addTask({title : this.title, content : this.content, attach : this.file}).subscribe( (response:IResponse) => {
			Log.l("[NewTaskComponent :: onSubmit()] response : ", response);
		});*/
	}
	
	onClickCancel():void {
		Log.l("[TaskDetailComponent :: onClickCancel()]");
		this.location.back();
	}

}
