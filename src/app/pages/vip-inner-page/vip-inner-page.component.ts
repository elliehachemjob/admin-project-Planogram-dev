import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getMethod } from 'src/app/helpers/helpers';
import { CommonService } from 'src/app/services/common.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-vip-inner-page',
  templateUrl: './vip-inner-page.component.html',
  styleUrls: ['./vip-inner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VipInnerPageComponent implements OnInit {
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  vipCategoriesDetailsHeader: string = this.database.vipCategoriesDetailsHeader;
  vipCategoriesDetailsContent: any = this.database.vipCategoriesDetailsContent;
  langSelected: any;

  constructor(
    private router: Router,
    private database: DatabaseService,
    private common: CommonService
  ) { }

  ngOnInit(): void {
    if (this.router.url.startsWith("/vip-inner-page")) {
      this.isLogoActive = true;
    }
    this.vipCategoriesDetailsContent = getMethod(this.vipCategoriesDetailsContent, localStorage.getItem("country")?.toLowerCase());
    this.langSelected = this.common.getAndSetLanguage(this.langSelected);
  }

  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  navigateVipPage(): void {
    this.router.navigate(['/vip'], { replaceUrl: true });
  }

  navigateInnerPage(): void {
    this.router.navigate(['/home']);
  }

  navigateGiftTablePage(): void {
    this.router.navigate(['/gift-table'], { replaceUrl: true });
  }

}
