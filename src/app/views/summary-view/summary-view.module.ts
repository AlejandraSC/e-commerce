import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SummaryViewComponent } from './summary-view.component';


@NgModule({
    declarations: [
        SummaryViewComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class SummaryViewModule {}
  