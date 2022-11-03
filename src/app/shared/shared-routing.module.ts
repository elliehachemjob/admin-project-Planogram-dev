import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { GiftTableComponent } from '../pages/gift-table/gift-table.component';
import { InnerPageComponent } from '../pages/inner-page/inner-page.component';
import { InsightsComponent } from '../pages/insights/insights.component';
import { LanguagesComponent } from '../pages/languages/languages.component';
import { SubCategoriesComponent } from '../pages/sub-categories/sub-categories.component';
import { VipInnerPageComponent } from '../pages/vip-inner-page/vip-inner-page.component';
import { VipComponent } from '../pages/vip/vip.component';
import { WelcomePageComponent } from '../pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: 'gift-table', component: GiftTableComponent, canActivate: [AuthGuard]
  },
  {
    path: 'home', component: InnerPageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'insights', component: InsightsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'languages/:country', component: LanguagesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'sub-categories', component: SubCategoriesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'vip', component: VipComponent, canActivate: [AuthGuard]
  },
  {
    path: 'vip-inner-page', component: VipInnerPageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'welcome-page', component: WelcomePageComponent, canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: 'welcome-page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class SharedRoutingModule { }
