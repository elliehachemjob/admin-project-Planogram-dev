import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagesComponent implements OnInit, OnDestroy, AfterViewInit {

  //variable sections
  siteName: string = "WINGMAN"
  year: Number = new Date().getFullYear();
  languages: string[] = ["Portuguese", "Sinhala", "Dhivehi", "Malayalam", "Arabic", "French", "Urdu", "English"];



  // Injection dependencies If needed + 
  constructor(
    private router: Router,
  ) { }

  //Lifecycle hooks

  //When component initiate / useEffect without empty dependencies
  ngOnInit(): void {

  }

  //When component Destroyed
  ngOnDestroy(): void {

  }

  //To Control Dom elements / UseRef of react
  ngAfterViewInit() {

  }

  // Function Sections


  navigateInnerPage(language: string): void {
    if (language.toLowerCase() === "english") { language = "en"; localStorage.setItem("lang", "en"); }
    else if (language.toLowerCase() === "arabic") { language = "ar"; localStorage.setItem("lang", "ar"); }
    else if (language.toLowerCase() === "french") { language = "fr"; localStorage.setItem("lang", "fr"); }
    if (language === 'ar') {
      localStorage.setItem("isRTL", "true");
    } else { localStorage.setItem("isRTL", "false"); }
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });

  }




}
