import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VipComponent implements OnInit {
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  vipCategories: any = ["Category A", "Category B", "Category C"];
  vipHeaderText: string = ""

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.router.url.startsWith("/vip")) {
      this.isLogoActive = true;
    }
  }

  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  navigateVipPage() {
    this.router.navigate(['/vip']);
  }

  navigateInnerPage() {
    this.router.navigate(['/home']);
  }

  navigateInnerVipPage() {
    this.router.navigate(['/vip-inner-page'], { replaceUrl: true });
  }

}
