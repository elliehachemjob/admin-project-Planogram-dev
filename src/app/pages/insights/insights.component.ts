import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsightsComponent implements OnInit {
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  inSightsCategories: any = this.database.inSightsCategories;

  constructor(
    private router: Router,
    public logoService: LogoService,
    private database: DatabaseService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.router.url.startsWith("/insights")) {
      this.isLogoActive = true;
    }
    this.chooseInsightCategory(localStorage.getItem("country")?.toLowerCase(), this.inSightsCategories)
  }

  chooseInsightCategory(countryChosen: any, listOfCountries: any): void {
    this.inSightsCategories = listOfCountries.filter((data: any) => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.inSightsCategories.map((item: any) => this.inSightsCategories = item.content)
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

}
