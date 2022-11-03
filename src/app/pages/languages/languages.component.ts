import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagesComponent implements OnInit {
  //Presents the languages here but to note each country have its own languages done 
  //post the language values here to local storage then get them from each component 

  siteName: string = "WINGMAN";
  year: Number = new Date().getFullYear();
  languages: any = this.database.languages;

  constructor(
    private router: Router,
    private database: DatabaseService
  ) { }

  ngOnInit() {
    this.getLanguage(localStorage.getItem("country")?.toLowerCase(), this.languages);
  }


  navigateInnerPage(language: string): void {
    if (language === 'arabic') {
      localStorage.setItem("isRTL", "true");
      this.router.navigate(['/home']).then((): void => {
        window.location.reload();
      });
    } else { localStorage.setItem("isRTL", "false"); }
    this.router.navigate(['/home']).then((): void => {
      window.location.reload();
    });

    localStorage.setItem("language", language);
  }

  getLanguage(countryChosen: any, listOfCountries: any): void {
    this.languages = listOfCountries.filter((data: any): boolean => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.languages.map((item: any): any => this.languages = item.content);
  }
}


