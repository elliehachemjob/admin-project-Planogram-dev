import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftTableComponent } from '../pages/gift-table/gift-table.component';
import { InnerPageComponent } from '../pages/inner-page/inner-page.component';
import { InsightsComponent } from '../pages/insights/insights.component';
import { LanguagesComponent } from '../pages/languages/languages.component';
import { SubCategoriesComponent } from '../pages/sub-categories/sub-categories.component';
import { VipInnerPageComponent } from '../pages/vip-inner-page/vip-inner-page.component';
import { VipComponent } from '../pages/vip/vip.component';
import { WelcomePageComponent } from '../pages/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'gift-table', component: GiftTableComponent },
  { path: 'home', component: InnerPageComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'languages/:country', component: LanguagesComponent },
  { path: 'sub-categories', component: SubCategoriesComponent },
  { path: 'vip', component: VipComponent },
  { path: 'vip-inner-page', component: VipInnerPageComponent },
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: '**', redirectTo: 'welcome-page' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
