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
  subCategoryName: string = "impulse";
  subCategories: any[] = this.database.subCategories;
  panelOpenState = false;
  countryChosen: any = "";


  constructor(
    private router: Router,
    private database: DatabaseService
  ) { }
  ngOnInit(): void {
    if (this.router.url.startsWith("/sub-categories")) {
      this.isLogoActive = true;
    }
    this.chooseSubCategory(localStorage.getItem("country")?.toLowerCase(), this.subCategories)

  }

  chooseSubCategory(countryChosen: any, listOfCountries: any): void {
    this.subCategories = listOfCountries.filter((data: any) => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.subCategories.map(item => this.subCategories = item.content)
  }



  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  navigateVipPage() {
    this.router.navigate(['/vip']);
  }

  navigateInnerPage() {
    this.router.navigate(['/home'], { replaceUrl: true });
  }

}
