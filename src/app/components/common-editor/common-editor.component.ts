import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/*export enum Mode {
	EDITABLE = "editable",
	READONLY = "readOnly"
}*/

@Component( {
	selector: 'app-common-editor',
	templateUrl: './common-editor.component.html',
	styleUrls: ['./common-editor.component.css']
} )
export class CommonEditorComponent implements OnInit {
	//	@Input() public mode:Mode = Mode.READONLY;
	@Input() public readonly: boolean = false;
	
	@Input() content:string;
	@Output() contentChange:EventEmitter<string> = new EventEmitter();
	
	@Output() public onEditorCreated:EventEmitter<any> = new EventEmitter<any>();
	@Output() public onContentChanged:EventEmitter<any> = new EventEmitter<any>();
	@Output() public onSelectionChanged:EventEmitter<any> = new EventEmitter<any>();
	
	@Input() title: string;
	@Output() titleChange:EventEmitter<string> = new EventEmitter();
	
	public style:any = {
		height : "30rem"
	}
	
	public customOptions:any = {
		'list' : 'file'
	}

	constructor() { }

	ngOnInit() {
	}
	
	protected _onEditorCreated(editor:any):void {
//		console.log("[CommonEditorComponent :: _onEditorCreated()] editor : ", editor);
		this.onEditorCreated.emit(editor);
	}
/**
 * 
  editor: editorInstance,
  html: html,
  text: text,
  delta: delta,
  oldDelta: oldDelta,
  source: source
 */
	protected _onContentChanged(content:any):void {
		this.onContentChanged.emit(content);
	}
	
	/*
  editor: editorInstance,
  range: range,
  oldRange: oldRange,
  source: source
	 * */
	
	protected _onSelectionChanged(selection:any):void {
//		console.log("[CommonEditorComponent :: _onSelectionChanged()] selection : ", selection);
		this.onSelectionChanged.emit(selection);
	}
}
