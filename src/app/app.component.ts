import { Component } from '@angular/core';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
} )
export class AppComponent {
	private activatedComp:Component;
	title = 'Task Manager';

	onActivate( comp: Component ): void {
		console.info( "onActivate() ", event );
		this.activatedComp = comp;
	}

	onDeactivate( event: Component ): void {
		console.info( "onDeactivate() ", event );
	}
}
