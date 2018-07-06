import { Component, OnInit } from '@angular/core';
import { ServerApiService, IResponse } from "../../service/server-api.service";

@Component({
	selector: 'app-new-task',
	templateUrl: './new-task.component.html',
	styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
	protected title:string;
	protected content:string;
	protected file:File[];

	public readonly:boolean = false;

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
	
	public editorConfig = {
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
	
	constructor(private serverApiService:ServerApiService) { }

	ngOnInit() {
	}
	
	protected onSubmit():void {
		console.log("[NewTaskComponent :: onSubmit()] title : " + this.title );
		console.log("[NewTaskComponent :: onSubmit()] content : " + this.content );
		
		this.serverApiService.addTask({title : this.title, content : this.content, attach : this.file}).subscribe( (response:IResponse) => {
			console.log("[NewTaskComponent :: onSubmit()] response : ", response);
		});
	}
	
	protected onEditorCreated(editor:any):void {
		console.log("[NewTaskComponent :: onEditorCreated()] editor : ", editor);
	}
	
	protected onContentChanged(content:any):void {
		console.log("[NewTaskComponent :: onContentChanged()] this.content : " + this.content );
		console.log("[NewTaskComponent :: onContentChanged()] this.title : " + this.title );
	}
	
	protected onSelectionChanged(selection:any):void {
		console.log("[NewTaskComponent :: onSelectionChanged()] selection : ", selection);
	}
	
	onFileChange(obj:any):void {
		console.log("[NewTaskComponent :: onFileChange()] obj : ", obj);
		this.file = obj.target.files;
	}
}