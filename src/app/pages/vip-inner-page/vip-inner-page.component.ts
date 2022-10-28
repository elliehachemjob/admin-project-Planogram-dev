import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  vipCategoriesDetailsContent: any[] = [{ title: "Main Placement Chilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min 13 facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "Min 12 facings", path: "/assets/vip/1.png" }, { title: "Main Placement New", numberedElementPartOne: " #3", numberedElementPartTwo: "Min 13 facings", path: "/assets/vip/1.png" }];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.router.url.startsWith("/vip-inner-page")) {
      this.isLogoActive = true;
    }
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
