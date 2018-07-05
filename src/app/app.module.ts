import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyTaskListComponent } from './components/my-task-list/my-task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { NewSubTaskComponent } from './components/new-sub-task/new-sub-task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { LoginComponent } from './components/login/login.component';

import { ServerApiService } from './service/server-api.service';


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
	FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServerApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
