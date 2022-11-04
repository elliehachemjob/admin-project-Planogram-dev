import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedRoutingModule } from './shared-routing.module';
import { GiftTableComponent } from '../pages/gift-table/gift-table.component';
import { InnerPageComponent } from '../pages/inner-page/inner-page.component';
import { InsightsComponent } from '../pages/insights/insights.component';
import { LanguagesComponent } from '../pages/languages/languages.component';
import { SubCategoriesComponent } from '../pages/sub-categories/sub-categories.component';
import { VipComponent } from '../pages/vip/vip.component';
import { VipInnerPageComponent } from '../pages/vip-inner-page/vip-inner-page.component';
import { WelcomePageComponent } from '../pages/welcome-page/welcome-page.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CustomTranslationPipe } from '../pipes/CustomTranslation.pipe';

@NgModule({
  declarations: [GiftTableComponent, InnerPageComponent, InsightsComponent, LanguagesComponent, SubCategoriesComponent, VipComponent, VipInnerPageComponent, WelcomePageComponent, CustomTranslationPipe],
  imports: [
    NoopAnimationsModule,
    OverlayModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    CommonModule,
    SharedRoutingModule,
    TranslateModule,
    FormsModule
  ]
})
export class SharedModule { }
