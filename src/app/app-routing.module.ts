import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MyTaskListComponent } from './components/my-task-list/my-task-list.component';
import { NewSubTaskComponent } from './components/new-sub-task/new-sub-task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

import { AuthService } from "./auth.service";
import { AuthGuard } from './auth-guard.service';

const ROUTES: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{	path: 'main', 
		component: MainComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: 'my-task-list', component: MyTaskListComponent },
			{ path: 'new-task', component: NewTaskComponent },
			{ path: 'task-detail', component: TaskDetailComponent },
			{ path: '', redirectTo:'my-task-list', pathMatch: 'full'}
			]
	},
	{ path: 'new-sub-task', component: NewSubTaskComponent, canActivate: [AuthGuard] },
	{ path: '**', redirectTo: '/login' }
];

@NgModule( {
	imports: [
		RouterModule.forRoot( ROUTES/*, {useHash : true}*/ )
	],
	exports: [RouterModule],
	providers: [AuthGuard, AuthService],
	declarations: []
} )
export class AppRoutingModule { }
