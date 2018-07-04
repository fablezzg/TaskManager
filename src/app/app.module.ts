import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyTaskListComponent } from './components/my-task-list/my-task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { NewSubTaskComponent } from './components/new-sub-task/new-sub-task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MyTaskListComponent,
    TaskDetailComponent,
    NewSubTaskComponent,
    NewTaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
