import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getMethod } from 'src/app/helpers/helpers';
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
  langSelected: any;
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
    this.inSightsCategories = getMethod(this.inSightsCategories, localStorage.getItem("country")?.toLowerCase());
    this.langSelected = localStorage.getItem("language");
  }

  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  navigateVipPage(): void {
    this.router.navigate(['/vip']);
  }

  navigateInnerPage(): void {
    this.router.navigate(['/home']);
  }

}
