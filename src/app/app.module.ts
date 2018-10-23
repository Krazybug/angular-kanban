import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/board/card/summary/summary.component';
import { DetailComponent } from './components/board/card/detail/detail.component';

import { BoardComponent } from './components/board/board/board.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ListComponent } from './components/board/list/list.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ContentEditDirective } from './directives/common/content-edit.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DetailComponent,
    BoardComponent,
    HeaderComponent,
    ListComponent,
    ContentEditDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
