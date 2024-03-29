import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getMethod } from 'src/app/helpers/helpers';
import { DatabaseService } from 'src/app/services/database.service';
import ISO6391 from 'iso-639-1';
import { CommonService } from 'src/app/services/common.service';

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
    private database: DatabaseService,
    private common: CommonService
  ) { }




  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.router.url.startsWith("/vip")) {
      this.isLogoActive = true;
    }
    this.langSelected = this.common.getAndSetLanguage(this.langSelected);
    this.vipCategories = getMethod(this.vipCategories, localStorage.getItem("country")?.toLowerCase());
    this.vipHeaderText = getMethod(this.vipHeaderText, localStorage.getItem("country")?.toLowerCase());
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
