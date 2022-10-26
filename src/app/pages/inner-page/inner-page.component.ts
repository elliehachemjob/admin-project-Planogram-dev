import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LogoService } from 'src/app/services/logo.service';
import { TranslationService } from 'src/app/services/translation.service';


@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.component.html',
  styleUrls: ['./inner-page.component.scss']
})
export class InnerPageComponent implements OnInit {


  //variable sections
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  categories: any = [{ title: "impulse", background: "impulse" }, { title: "c&g", background: "cg" }, { title: "retail", background: "retail" }, { title: "coolers", background: "coolers" }]
  planogramQuickSearchPlaceHolder: string = "planogramQuickSearchPlaceHolder"
  title: string = '';
  isOpen = false;
  languages: string[] = ["English", "Arabic", "French"]
  isRtl: any = localStorage.getItem('isRTL')
  data: any = ''
  // Injection dependencies If needed + 
  constructor(
    private router: Router,
    private translate: TranslateService,
    private translation: TranslationService
  ) { }

  //Lifecycle hooks

  //When component initiate / useEffect without empty dependencies
  ngOnInit(): void {
    console.log(this.router.url, 'router')
    if (this.router.url.startsWith("/home")) {
      this.isLogoActive = true;
    }
    //Api Test
    // this.logoService.payloadApiTest().subscribe((data) => {
    //   console.log(data.title, "data")
    //   this.title = data.title;
    // })
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

    // }fOverlayModule

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

  navigateSubCategory() {
    this.router.navigate(['/sub-categories']);
  }

  subCatsAccordion(isEmptyContent: boolean = true) {
    if (!isEmptyContent) this.isHidden = !this.isHidden;
  }

  openLanguageOverlay() {
    console.log("overlay working")
  }

  changeLanguage(language: string = "english") {
    //Change language here
    if (language === "English") { language = "en"; localStorage.setItem("lang", "en"); }
    else if (language === "Arabic") { language = "ar"; localStorage.setItem("lang", "ar"); }
    else if (language === "French") { language = "fr"; localStorage.setItem("lang", "fr"); }


    if (language === 'ar') {
      localStorage.setItem("isRTL", "true"); window.location.reload(); return;
    } else { localStorage.setItem("isRTL", "false"); window.location.reload(); }
    return

  }

  handleSearchChange(e: any) {
    const test = this.categories.filter((category: any) => category.title.startsWith((e)));

    this.categories = [...test]

    if (this.categories.length === 0) {
      this.categories = [{ title: "Error 404", background: "impulse" }]
    }

    if (e.length === 0) {
      this.categories = [{ title: "impulse", background: "impulse" }, { title: "c&g", background: "cg" }, { title: "retail", background: "retail" }, { title: "coolers", background: "coolers" }]
    }

  }


}

