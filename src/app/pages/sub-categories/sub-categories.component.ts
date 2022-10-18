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
  isLogo1Active: boolean = false;
  isLogo2Active: boolean = false;
  isLogo3Active: boolean = false;


  // Injection dependencies If needed + 
  constructor(
    private router: Router,
    public logoService: LogoService
  ) { }

  //Lifecycle hooks

  //When component initiate / useEffect without empty dependencies
  ngOnInit(): void {
    this.logoService.isLogo1Active.subscribe((data) => {
      this.isLogo1Active = data;
    })
    this.logoService.isLogo2Active.subscribe((data) => {
      this.isLogo2Active = data;
    })
    this.logoService.isLogo3Active.subscribe((data) => {
      this.isLogo3Active = data;
    })
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
    this.router.navigate(['/inner-page']);
  }

  navigateInnerVipPage() {
    this.router.navigate(['/vip-inner-page']);
  }

  subCatsAccordion(isEmptyContent: boolean = true) {
    if (!isEmptyContent) this.isHidden = !this.isHidden;
  }


}
