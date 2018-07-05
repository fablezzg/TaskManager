import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  title: string; content: string; attach: string;
  constructor() { }

  ngOnInit() {
    this.title = "##TITLE";
    this.content = "##CONTENT";
    this.attach = "NONE";
  }

}
