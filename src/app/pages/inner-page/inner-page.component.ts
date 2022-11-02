import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatabaseService } from 'src/app/services/database.service';
import { TranslationService } from 'src/app/services/translation.service';


@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.component.html',
  styleUrls: ['./inner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerPageComponent implements OnInit {
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  categories: any = this.database.categories;


  planogramQuickSearchPlaceHolder: string = this.database.planogramQuickSearchPlaceHolder;
  title: string = '';
  isOpen = false;
  languages: string[] = this.database.chosenLanguages;
  isRtl: any = localStorage.getItem('isRTL');
  searchedData: any = '';
  isSearchEmpty: boolean = false;
  categoryChosen: any = [];
  countryChosen: any = "";

  constructor(
    private router: Router,
    private translate: TranslateService,
    private translation: TranslationService,
    private database: DatabaseService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.router.url.startsWith("/home")) {
      this.isLogoActive = true;
    }
    this.getCountry(localStorage.getItem("country")?.toLowerCase(), this.categories);

  }

  getCountry(countryChosen: any, listOfCountries: any): void {
    this.categoryChosen = listOfCountries.filter((data: any): boolean => data.country.toLowerCase() === countryChosen.toLowerCase());

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


  navigateSubCategory(): void {
    this.router.navigate(['/sub-categories'], { replaceUrl: true });
  }

  changeLanguage(language: string = "english"): void {
    if (language === "English") { language = "en"; localStorage.setItem("lang", "en"); }
    else if (language === "Arabic") { language = "ar"; localStorage.setItem("lang", "ar"); }
    else if (language === "French") { language = "fr"; localStorage.setItem("lang", "fr"); }
    if (language === 'ar') {
      localStorage.setItem("isRTL", "true"); window.location.reload(); return;
    } else { localStorage.setItem("isRTL", "false"); window.location.reload(); }
    return;

  }

  handleSearchChange(e: any): void {
    const searchData: any = this.categories.filter((category: any) => category.title.includes((e.target.value)) || category.title.includes((e.target.value.toLowerCase())) || category.title.includes((e.target.value.toUpperCase())));
    this.categories = [...searchData];
    if (this.categories.length === 0) {
      this.categories = [{ title: "Error 404", background: "" }];
      this.isSearchEmpty = true;
    } else {
      this.isSearchEmpty = false;
    }
    if (e.target.value.length === 0) {
      this.categories = [{ title: "impulse", background: "impulse" }, { title: "c&g", background: "cg" }, { title: "retail", background: "retail" }, { title: "coolers", background: "coolers" }];
    }
    const searchSubCategoryData: any = this.database.subCategories.filter((category: any) => (category.title.includes(e.target.value) || category.subTitle.includes(e.target.value) || category.title.includes(e.target.value.toUpperCase()) || category.subTitle.includes(e.target.value.toUpperCase()) || category.title.includes(e.target.value.toLowerCase()) || category.subTitle.includes(e.target.value.toLowerCase())) && e.target.value);
    if (searchSubCategoryData.length > 0) {
      this.router.navigate(['/sub-categories']);
    }

  }


}

