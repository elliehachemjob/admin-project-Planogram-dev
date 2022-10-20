import { LogoService } from './../../services/logo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {


  //variable sections
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  subCategoryName: string = "Impulse";
  subCategories: any = [{ title: "Impulse A", subTitle: "1 shelf - main placement", nestedDetails: { title: "12 Facings", imagePath: "https://wingmanapi.rbprojects.me/public/uploads/product/1630222037.png", flow: "Traffic Flow", isEmptyContent: false } }, { title: "Impulse B", subTitle: "1 shelf - main placement", nestedDetails: { title: "", imagePath: "", flow: "", isEmptyContent: true } }, { title: "Impulse C", subTitle: "1 shelf - main placement", nestedDetails: { title: "", imagePath: "", flow: " Flow", isEmptyContent: true } }]

  // Injection dependencies If needed + 
  constructor(
    private router: Router,
  ) { }

  //Lifecycle hooks

  //When component initiate / useEffect without empty dependencies
  ngOnInit(): void {
    console.log(this.router.url, 'router')
    if (this.router.url.startsWith("/sub-categories")) {
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


}
