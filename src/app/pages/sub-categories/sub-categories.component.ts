import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { getMethod } from 'src/app/helpers/helpers';
import { DatabaseService } from 'src/app/services/database.service';
import ISO6391 from 'iso-639-1';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubCategoriesComponent implements OnInit {
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  subCategoryName: string = this.database.subCategoryName;
  subCategories: any = this.database.subCategories;
  panelOpenState: boolean = false;
  countryChosen: any = "";
  langSelected: any;

  constructor(
    private router: Router,
    private database: DatabaseService,
    private common: CommonService
  ) { }
  ngOnInit(): void {
    if (this.router.url.startsWith("/sub-categories")) {
      this.isLogoActive = true;
    }
    this.langSelected = this.common.getAndSetLanguage(this.langSelected);
    this.subCategories = getMethod(this.subCategories, localStorage.getItem("country")?.toLowerCase());
  }

  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  navigateVipPage(): void {
    this.router.navigate(['/vip']);
  }

  navigateInnerPage(): void {
    this.router.navigate(['/home'], { replaceUrl: true });
  }

}
