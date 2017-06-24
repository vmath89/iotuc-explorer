import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule, MdTabsModule, MdMenuModule, MdToolbarModule, MdSidenavModule,
  MdIconModule, MdListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AutomotiveComponent } from './components/automotive/automotive/automotive.component';
import { FinanceComponent } from './components/finance/finance/finance.component';
import { TechnologyComponent } from './components/technology/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomotiveComponent,
    FinanceComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    MdListModule,
    RouterModule.forRoot([
      {
        path: 'automotive',
        component: AutomotiveComponent
      },
      {
        path: 'finance',
        component: FinanceComponent
      },
      {
        path: 'tech',
        component: TechnologyComponent
      },
      {
        path: '',
        redirectTo: '/automotive',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
