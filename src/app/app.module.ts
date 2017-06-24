import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule, MdTabsModule, MdMenuModule, MdToolbarModule, MdSidenavModule,
  MdIconModule, MdListModule, MdGridListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UseCasesComponent } from './components/use-cases/use-cases.component';
import { UseCasesDetailsComponent } from './components/use-cases-details/use-cases-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UseCasesComponent,
    UseCasesDetailsComponent
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
    MdGridListModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
