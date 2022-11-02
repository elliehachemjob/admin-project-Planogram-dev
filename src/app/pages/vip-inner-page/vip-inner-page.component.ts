import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  vipCategoriesDetailsHeader: string = "VIP CATEGORY A";
  vipCategoriesDetailsContent: any[] = this.database.vipCategoriesDetailsContent;

  constructor(
    private router: Router,
    private database: DatabaseService
  ) { }

  ngOnInit(): void {
    if (this.router.url.startsWith("/vip-inner-page")) {
      this.isLogoActive = true;
    }
    this.chooseVipInnerCategory(localStorage.getItem("country")?.toLowerCase(), this.vipCategoriesDetailsContent)
  }


  chooseVipInnerCategory(countryChosen: any, listOfCountries: any): void {
    this.vipCategoriesDetailsContent = listOfCountries.filter((data: any) => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.vipCategoriesDetailsContent.map(item => this.vipCategoriesDetailsContent = item.content)
  }

  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  navigateVipPage() {
    this.router.navigate(['/vip'], { replaceUrl: true });
  }

  navigateInnerPage() {
    this.router.navigate(['/home']);
  }

  navigateGiftTablePage(): void {
    this.router.navigate(['/gift-table'], { replaceUrl: true });
  }

}
