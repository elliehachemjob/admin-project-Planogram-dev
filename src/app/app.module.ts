import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GiftTableComponent } from './pages/gift-table/gift-table.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SubCategoriesComponent } from './pages/sub-categories/sub-categories.component';
import { InnerPageComponent } from './pages/inner-page/inner-page.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { VipInnerPageComponent } from './pages/vip-inner-page/vip-inner-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerPageComponent,
    GiftTableComponent,
    InsightsComponent,
    LanguagesComponent,
    SubCategoriesComponent,
    VipInnerPageComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
