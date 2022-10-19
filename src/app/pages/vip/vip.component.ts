import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.scss']
})
export class VipComponent implements OnInit {


  //variable sections
  isHidden: boolean = true;
  isLogoActive: boolean = false;



  // Injection dependencies If needed + 
  constructor(
    private router: Router,
  ) { }

  //Lifecycle hooks

  //When component initiate / useEffect without empty dependencies
  ngOnInit(): void {
    console.log(this.router.url, 'router')
    if (this.router.url.startsWith("/vip")) {
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
