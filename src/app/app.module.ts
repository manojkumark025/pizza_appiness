import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { enableProdMode } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
// Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

// Components
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,HttpClientModule,HttpModule
	],
	providers: [DatePipe],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
