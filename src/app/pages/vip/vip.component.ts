import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VipComponent implements OnInit {
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  vipCategories: any = this.database.vipCategories;
  countryChosen: string = "";
  vipHeaderText: any = this.database.vipHeaderText;
  langSelected: any;


  constructor(
    private router: Router,
    private database: DatabaseService
  ) { }




  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.router.url.startsWith("/vip")) {
      this.isLogoActive = true;
    }
    this.getVipCategories(localStorage.getItem("country")?.toLowerCase(), this.vipCategories);
    this.getVipHeaderText(localStorage.getItem("country")?.toLowerCase(), this.vipHeaderText);
    this.langSelected = localStorage.getItem("language");

  }

  getVipCategories(countryChosen: any, listOfCountries: any): void {
    this.vipCategories = listOfCountries.filter((data: any): boolean => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.vipCategories.map((item: any): any => this.vipCategories = item.content);
  }


  getVipHeaderText(countryChosen: any, listOfCountries: any): void {
    this.vipHeaderText = listOfCountries.filter((data: any): boolean => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.vipHeaderText.map((item: any): any => this.vipHeaderText = item.content);
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

  navigateInnerVipPage(): void {
    this.router.navigate(['/vip-inner-page'], { replaceUrl: true });
  }

}
