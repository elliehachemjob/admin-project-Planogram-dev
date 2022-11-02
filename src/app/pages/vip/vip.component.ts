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
  countryChosen: any = "";

  vipHeaderText: any = this.database.vipHeaderText;



  constructor(
    private router: Router,
    private database: DatabaseService
  ) { }




  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.router.url.startsWith("/vip")) {
      this.isLogoActive = true;
    }
    this.chooseVipCategories(localStorage.getItem("country")?.toLowerCase(), this.vipCategories)
    this.chooseVipHeaderText(localStorage.getItem("country")?.toLowerCase(), this.vipHeaderText)

  }

  chooseVipCategories(countryChosen: any, listOfCountries: any): void {
    this.vipCategories = listOfCountries.filter((data: any) => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.vipCategories.map((item: any) => this.vipCategories = item.content)
  }


  chooseVipHeaderText(countryChosen: any, listOfCountries: any): void {
    this.vipHeaderText = listOfCountries.filter((data: any) => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.vipHeaderText.map((item: any) => this.vipHeaderText = item.content)

    console.log(this.vipHeaderText, "testtg")
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
