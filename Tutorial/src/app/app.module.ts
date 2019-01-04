import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/events-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    TodoComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
