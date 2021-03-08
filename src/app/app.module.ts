import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartViewComponent } from './views/cart-view/cart-view.component';
import { SummaryViewComponent } from './views/summary-view/summary-view.component';
import { CommonModule } from '@angular/common';

//imports primeng
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown'; 
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {  ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    CartViewComponent,
    SummaryViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule, 
    InputTextModule,
    CalendarModule,
    ChartModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
