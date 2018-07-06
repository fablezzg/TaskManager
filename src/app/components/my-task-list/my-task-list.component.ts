import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IProject } from "../../data-form/data-form";

@Component({
	selector: 'app-my-task-list',
	templateUrl: './my-task-list.component.html',
	styleUrls: ['./my-task-list.component.css']
})
export class MyTaskListComponent implements OnInit {

	sort_arrow: string = "↓";
	current_arrow: string = "DOWN";
	sort_selected: string = "date";
	open_selected: boolean = true;
	close_selected: boolean = true;

	projects:IProject[];
	constructor(private router:Router) { }

	ngOnInit() {
		this.projects = [{
			task_id:"TSK-8O6JJ9AT9AX",
			task_owner_id: "cwchoi@welgate.com",
			title: "Button GUI 변경",
			content:"Button GUI 첨부된 파일로 변경해주세요.",
			task_state: "OPEN",
			task_date: "2018-07-04"},{
			task_id:"TSK-ABCDEFGHOJ",
			task_owner_id: "yjchoi@welgate.com",
			title: "List GUI 변경",
			content:"List GUI 첨부된 파일로 변경해주세요.",
			task_state: "CLOSE",
			task_date: "2018-07-05"},{
			task_id:"TSK-KLMNOPQRST",
			task_owner_id: "jhjung@welgate.com",
			title: "Task GUI 변경",
			content:"Task GUI 첨부된 파일로 변경해주세요.",
			task_state: "CLOSE",
			task_date: "2018-07-06"}
		];

		this.doSort("date");
	}

	onClickItem(task_id: string): void {
		console.log("[my-task-list] onClickItem ::" + task_id);
		this.router.navigate(['main/task-detail'], {replaceUrl: true});
	}

	select(sortWay: string) {
		if (sortWay == "date") {
			console.log("[my-task-list] sort() :: date");
			if(this.sort_selected && this.sort_selected == "date") {
				if(this.current_arrow == "UP") {
					this.current_arrow = "DOWN";
				} else if(this.current_arrow == "DOWN") {
					this.current_arrow = "UP";
				}
				this.arrowChange(this.current_arrow);
			} else {
				this.sort_selected = "date";
			}
			this.doSort(sortWay);
		} else if (sortWay == "open") {
			console.log("[my-task-list] sort() :: open");
			if(this.open_selected){
				this.open_selected = false;
			} else {
				this.open_selected = true;
			}
		} else if (sortWay == "close") {
			console.log("[my-task-list] sort() :: close");
			if(this.close_selected){
				this.close_selected = false;
			} else {
				this.close_selected = true;
			}
		}
	}

	doSort(sortWay: string) {
		console.log("[my-task-list] doSort() ::", sortWay);
		if(sortWay == 'date' && this.current_arrow == "UP") {
			console.log("[my-task-list] doSort() :: Date & UP");
			for(let i=0; i<this.projects.length; i++) {
				for(let j=0; j<i; j++) {
					if (this.projects[i].task_date == this.projects[j].task_date) {
						/*let temp: IProject = this.projects[i];
						this.projects[i] = this.projects[j];
						this.projects[j] = temp;*/
					} else if (this.projects[i].task_date < this.projects[j].task_date) {
						let temp: IProject = this.projects[i];
						this.projects[i] = this.projects[j];
						this.projects[j] = temp;
					}
				}
			}
		} else if(sortWay == 'date' && this.current_arrow == "DOWN") {
			console.log("[my-task-list] doSort() :: Date & DOWN");
			for(let i=(this.projects.length-1); i>=0; i--) {
				for(let j=(this.projects.length-1); j>i; j--) {
					if (this.projects[i].task_date == this.projects[j].task_date) {
						/*let temp: IProject = this.projects[i];
						this.projects[i] = this.projects[j];
						this.projects[j] = temp;*/
					} else if (this.projects[i].task_date < this.projects[j].task_date) {
						let temp: IProject = this.projects[i];
						this.projects[i] = this.projects[j];
						this.projects[j] = temp;
					}
				}
			}
		}
		console.log("[my-task-list] doSort() result :: ", this.projects);
	}

	arrowChange(arrow: string) {
		if(arrow == "UP") {
			this.sort_arrow = "↑";
		} else if(arrow == "DOWN") {
			this.sort_arrow = "↓";
		}
	}
}
