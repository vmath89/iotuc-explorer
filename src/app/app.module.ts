import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MdToolbarModule, MdListModule, MdGridListModule, MdCardModule, MdButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UseCasesComponent } from './components/use-cases/use-cases.component';
import { UseCasesDetailsComponent } from './components/use-cases-details/use-cases-details.component';
import { IndustryService } from './services/industry/industry.service'


import {HttpModule, JsonpModule} from "@angular/http";
import { SortPipe } from './pipes/sort/sort.pipe';
import { Ng2TweetModule } from 'ng2-tweet/lib/index';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UseCasesComponent,
    UseCasesDetailsComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    Ng2TweetModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
      MdButtonModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      { path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'usecases/:industry',
        component: UseCasesComponent
      },
      {
        path: 'details/:id',
        component: UseCasesDetailsComponent
      }
    ])
  ],
  providers: [IndustryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
