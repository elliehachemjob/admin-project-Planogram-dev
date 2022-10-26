import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-vip-inner-page',
  templateUrl: './vip-inner-page.component.html',
  styleUrls: ['./vip-inner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VipInnerPageComponent implements OnInit {



  //variable sections
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  vipCategoriesDetailsHeader: string = "VIP CATEGORY A";
  vipCategoriesDetailsContent: any[] = [{ title: "Main Placement Chilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min 13 facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "Min 12 facings", path: "/assets/vip/1.png" }, { title: "Main Placement New", numberedElementPartOne: " #3", numberedElementPartTwo: "Min 13 facings", path: "/assets/vip/1.png" }];



  // Injection dependencies If needed + 
  constructor(
    private router: Router,
  ) { }

  //Lifecycle hooks

  //When component initiate / useEffect without empty dependencies
  ngOnInit(): void {
    console.log(this.router.url, 'router')
    if (this.router.url.startsWith("/vip-inner-page")) {
      this.isLogoActive = true;
    }
  }

  //When component Destroyed
  ngOnDestroy(): void {

  }

  //To Control Dom elements / UseRef of react
  ngAfterViewInit() {

  }

  // Function Sections
  navigateLanguagesPage(): void {
    this.router.navigate(['/languages']);
  }

  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  logoActivation() {
    // if (logoNumber === 1) {
    //   this.isLogo1Active = true;
    //   this.isLogo2Active = false;
    //   this.isLogo3Active = false;

    // }
    // if (logoNumber === 2) {
    //   this.isLogo1Active = false;
    //   this.isLogo2Active = true;
    //   this.isLogo3Active = false;
    // }
    // if (logoNumber === 3) {
    //   this.isLogo1Active = false;
    //   this.isLogo2Active = false;
    //   this.isLogo3Active = true;
    // }

  }

  navigateVipPage() {
    this.router.navigate(['/vip']);
  }

  navigateInnerPage() {
    this.router.navigate(['/home']);
  }

  navigateInnerVipPage() {
    this.router.navigate(['/vip-inner-page']);
  }

  subCatsAccordion(isEmptyContent: boolean = true) {
    if (!isEmptyContent) this.isHidden = !this.isHidden;
  }


  navigateGiftTablePage(): void {
    this.router.navigate(['/gift-table']);
  }



}
