import { Component, OnInit } from '@angular/core';
import { ServerApiService, IResponse } from "../../service/server-api.service";
import { Location } from '@angular/common';
import { Log } from "../../utils/Log";

@Component({
	selector: 'app-new-task',
	templateUrl: './new-task.component.html',
	styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
	title:string;
	content:string;
	file:File[];

	readonly:boolean = false;

	/*public editorConfig = {
		"editable": true,
		"spellcheck": true,
		"height": "500px",
		"minHeight": "500",
		"width": "auto",
		"minWidth": "0",
		"translate": "yes",
		"enableToolbar": true,
		"showToolbar": true,
		"placeholder": "Enter text here...",
		"imageEndPoint": "http://13.56.201.149:5010/",
		"toolbar": [
		["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
		["fontSize", "color"],
		["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
		["cut", "copy", "delete", "removeFormat", "undo", "redo"],
		["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
		["link", "unlink", "image", "video"],
		["code"]
		]
	};*/
	
	editorConfig = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],        // toggled buttons
			['blockquote', 'code-block'],

			[{ 'header': 1 }, { 'header': 2 }],               // custom button values
			[{ 'list': 'ordered' }, { 'list': 'bullet' }],
			[{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
			[{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
			[{ 'direction': 'rtl' }],                         // text direction

			[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

			[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
			[{ 'font': [] }],
			[{ 'align': [] }],

			['clean'],                                         // remove formatting button

			['link', 'image', 'video', 'file']                         // link and image, video
		]
	};
	
	constructor(private serverApiService:ServerApiService, private location:Location) { }

	ngOnInit() {
	}
	
	onClickComplete():void {
		Log.l("[NewTaskComponent :: onSubmit()] title : " + this.title );
		Log.l("[NewTaskComponent :: onSubmit()] content : " + this.content );
		
		this.serverApiService.addTask({title : this.title, content : this.content, attach : this.file}).subscribe( (response:IResponse) => {
			Log.l("[NewTaskComponent :: onSubmit()] response : ", response);
		});
	}
	
	onClickCancel():void {
		Log.l("[NewTaskComponent :: onClickCancel()]");
		this.location.back();
	}
	
	onEditorCreated(editor:any):void {
		Log.l("[NewTaskComponent :: onEditorCreated()] editor : ", editor);
	}
	
	onContentChanged(content:any):void {
		Log.l("[NewTaskComponent :: onContentChanged()] this.content : " + this.content );
		Log.l("[NewTaskComponent :: onContentChanged()] this.title : " + this.title );
	}
	
	onSelectionChanged(selection:any):void {
		Log.l("[NewTaskComponent :: onSelectionChanged()] selection : ", selection);
	}
	
	onFileChange(obj:any):void {
		Log.l("[NewTaskComponent :: onFileChange()] obj : ", obj);
		this.file = obj.target.files;
	}
}