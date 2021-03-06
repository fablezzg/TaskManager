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
import { MainComponent } from './components/main/main.component';
import { CommonEditorComponent } from './components/common-editor/common-editor.component';

import { WhttpClient } from './service/whttp-client';
import { ServerApiService } from './service/server-api.service';

import { NgxEditorModule } from 'ngx-editor';
import { QuillModule } from 'ngx-quill';


@NgModule( {
	imports: [NgxEditorModule, QuillModule],
	exports: [NgxEditorModule, QuillModule],
	declarations: []
} )
export class ExternalModule { }

@NgModule({
  declarations: [
    AppComponent,
    CommonEditorComponent,
    MyTaskListComponent,
    TaskDetailComponent,
    NewSubTaskComponent,
    NewTaskComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
	FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ExternalModule,
  ],
  providers: [WhttpClient, ServerApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
