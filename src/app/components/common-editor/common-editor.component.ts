import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Log } from "../../utils/Log";

import * as QuillNamespace from 'quill';
import ImageResize from 'quill-image-resize-module';
import { ImageDrop } from './quill-editor-image-drop-module';

let Quill: any = QuillNamespace;
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);

export enum Mode {
	NEW = "new",
	EDITABLE = "editable",
	READONLY = "readOnly"
}

@Component( {
	selector: 'app-common-editor',
	templateUrl: './common-editor.component.html',
	styleUrls: ['./common-editor.component.css']
} )
export class CommonEditorComponent implements OnInit {
	//	@Input() public mode:Mode = Mode.READONLY;
	Mode = Mode;
	@Input() mode:Mode = Mode.READONLY;
	
	@Input() content:string;
	@Output() contentChange:EventEmitter<string> = new EventEmitter();
	
	@Output() onEditorCreated:EventEmitter<any> = new EventEmitter<any>();
	@Output() onContentChanged:EventEmitter<any> = new EventEmitter<any>();
	@Output() onSelectionChanged:EventEmitter<any> = new EventEmitter<any>();
	
	@Output() onClickComplete:EventEmitter<any> = new EventEmitter<any>();
	@Output() onClickCancel:EventEmitter<any> = new EventEmitter<any>();
	
	@Input() title: string;
	@Output() titleChange:EventEmitter<string> = new EventEmitter();
	
	style:any = {
		height : "30rem"
	}
	
	customOptions:any = {
		'list' : 'file'
	}
	
	private emptyArray:any = [];
	
	editorConfig:any = {
		toolbar: {
			container: [
				['bold', 'italic', 'underline', 'strike'],
                // toggled buttons
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }],
                // custom button values
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                // superscript/subscript
                [{ indent: '-1' }, { indent: '+1' }],
                // outdent/indent
                [{ direction: 'rtl' }],
                // text direction
                [{ size: ['small', false, 'large', 'huge'] }],
                // custom dropdown
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [
                    { color: this.emptyArray.slice() },
                    { background: this.emptyArray.slice() }
                ],
                // dropdown with defaults from theme
                [{ font: this.emptyArray.slice() }],
                [{ align: this.emptyArray.slice() }],
                ['clean'],
                // remove formatting button
                ['link', 'image', 'video'] // link and image, video
			]
		},
		imageResize: true,
		imageDrop:true
	};

	constructor() {
		Log.i("ImageDrop : ", ImageDrop);
		Log.i("ImageResize : ", ImageResize);
	}

	ngOnInit() {
	}
	
	_onEditorCreated(editor:any):void {
//		Log.l("[CommonEditorComponent :: _onEditorCreated()] editor : ", editor);
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
	_onContentChanged(content:any):void {
		this.onContentChanged.emit(content);
	}
	
	/*
  editor: editorInstance,
  range: range,
  oldRange: oldRange,
  source: source
	 * */
	
	_onSelectionChanged(selection:any):void {
//		Log.l("[CommonEditorComponent :: _onSelectionChanged()] selection : ", selection);
		this.onSelectionChanged.emit(selection);
	}
	
	_onClickComplete():void {
		
	}
	
	_onClickCancel():void {
		
	}
}
