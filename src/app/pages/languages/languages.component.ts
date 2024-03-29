import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getMethod } from 'src/app/helpers/helpers';
import { DatabaseService } from 'src/app/services/database.service';
import ISO6391 from 'iso-639-1';
import { CommonService } from 'src/app/services/common.service';


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
  langSelected: any;
  constructor(
    private router: Router,
    private database: DatabaseService,
    private common: CommonService
  ) { }

  ngOnInit() {
    this.langSelected = this.common.getAndSetLanguage(this.langSelected);
    this.languages = getMethod(this.languages, localStorage.getItem("country")?.toLowerCase());
  }


  navigateInnerPage(language: string): void {
    if (language.toLowerCase() === 'arabic') {
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
}


