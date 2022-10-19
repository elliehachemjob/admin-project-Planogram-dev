import { VipComponent } from './pages/vip/vip.component';
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


// Needed for frontend translation to work
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InnerPageComponent,
    GiftTableComponent,
    InsightsComponent,
    LanguagesComponent,
    SubCategoriesComponent,
    VipComponent,
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
    }),
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }



// required for AOT compilation => for angular 9 and above
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
