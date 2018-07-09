import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Log } from "../../utils/Log";
import { IProject } from "../../service/server-api.service";

@Component({
	selector: 'app-my-task-list',
	templateUrl: './my-task-list.component.html',
	styleUrls: ['./my-task-list.component.css']
})
export class MyTaskListComponent implements OnInit {

	sort_arrow: string = "��";
	current_arrow: string = "DOWN";
	sort_selected: string = "date";
	open_selected: boolean = true;
	close_selected: boolean = true;

	projects: IProject[];
	constructor(private router:Router) { }

	ngOnInit() {
		this.projects = [{
			title: "Button GUI ����",
			content:"Button GUI ÷�ε� ���Ϸ� �������ּ���.",
			attach: "none",
			due_date: "2018-07-04",
			handers: [{ user_id: "cwchoi@welgate.com", due_date: "2018-07-04", comment: ""}],
			task_state: "OPEN",
			reg_date: "2018-07-01",
			task_id:"TSK-8O6JJ9AT9AX",
			writer:"yjchoi@welgate.com"},{
			
			title: "List GUI ����",
			content:"List GUI ÷�ε� ���Ϸ� �������ּ���.",
			attach: "none",
			due_date: "2018-07-05",
			handers: [{ user_id: "yjchoi@welgate.com", due_date: "2018-07-05", comment: ""}],
			task_state: "CLOSE",
			reg_date: "2018-07-02",
			task_id:"TSK-ABCDEFGHIJ",
			writer:"cwchoi@welgate.com"},{
			
			title: "Task GUI ����",
			content:"Task GUI ÷�ε� ���Ϸ� �������ּ���.",
			attach: "none",
			due_date: "2018-07-06",
			handers: [{ user_id: "jhjung@welgate.com", due_date: "2018-07-06", comment: ""}],
			task_state: "CLOSE",
			reg_date: "2018-07-03",
			task_id:"TSK-KLMNOPQRST",
			writer:"cwchoi@welgate.com"}];

		this.doSort("date");
	}

	onClickItem(task_id: string): void {
		Log.l("[my-task-list] onClickItem ::" + task_id);
		this.router.navigate(['main/task-detail', task_id], {replaceUrl: true});
	}

	select(sortWay: string) {
		if (sortWay == "date") {
			Log.l("[my-task-list] sort() :: date");
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
			Log.l("[my-task-list] sort() :: open");
			if(this.open_selected){
				this.open_selected = false;
			} else {
				this.open_selected = true;
			}
		} else if (sortWay == "close") {
			Log.l("[my-task-list] sort() :: close");
			if(this.close_selected){
				this.close_selected = false;
			} else {
				this.close_selected = true;
			}
		}
	}

	doSort(sortWay: string) {
		Log.l("[my-task-list] doSort() ::", sortWay);
		if(sortWay == 'date' && this.current_arrow == "UP") {
			Log.l("[my-task-list] doSort() :: Date & UP");
			for(let i=0; i<this.projects.length; i++) {
				for(let j=0; j<i; j++) {
					if (this.projects[i].due_date == this.projects[j].due_date) {
						/*let temp: IProject = this.projects[i];
						this.projects[i] = this.projects[j];
						this.projects[j] = temp;*/
					} else if (this.projects[i].due_date < this.projects[j].due_date) {
						let temp: IProject = this.projects[i];
						this.projects[i] = this.projects[j];
						this.projects[j] = temp;
					}
				}
			}
		} else if(sortWay == 'date' && this.current_arrow == "DOWN") {
			Log.l("[my-task-list] doSort() :: Date & DOWN");
			for(let i=(this.projects.length-1); i>=0; i--) {
				for(let j=(this.projects.length-1); j>i; j--) {
					if (this.projects[i].due_date == this.projects[j].due_date) {
						/*let temp: IProject = this.projects[i];
						this.projects[i] = this.projects[j];
						this.projects[j] = temp;*/
					} else if (this.projects[i].due_date < this.projects[j].due_date) {
						let temp: IProject = this.projects[i];
						this.projects[i] = this.projects[j];
						this.projects[j] = temp;
					}
				}
			}
		}
		Log.l("[my-task-list] doSort() result :: ", this.projects);
	}

	arrowChange(arrow: string) {
		if(arrow == "UP") {
			this.sort_arrow = "��";
		} else if(arrow == "DOWN") {
			this.sort_arrow = "��";
		}
	}
}
