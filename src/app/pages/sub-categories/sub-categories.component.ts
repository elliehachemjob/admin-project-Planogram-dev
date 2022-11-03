import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

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
  subCategories: any[] = this.database.subCategories;
  panelOpenState: boolean = false;
  countryChosen: any = "";
  langSelected: any;

  constructor(
    private router: Router,
    private database: DatabaseService
  ) { }
  ngOnInit(): void {
    if (this.router.url.startsWith("/sub-categories")) {
      this.isLogoActive = true;
    }
    this.getSubCategory(localStorage.getItem("country")?.toLowerCase(), this.subCategories);
    this.langSelected = localStorage.getItem("language");
  }

  getSubCategory(countryChosen: any, listOfCountries: any): void {
    this.subCategories = listOfCountries.filter((data: any): boolean => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.subCategories.map((item: any): any => this.subCategories = item.content);
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
