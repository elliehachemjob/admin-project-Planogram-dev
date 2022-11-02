import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagesComponent {
  siteName: string = "WINGMAN";
  year: Number = new Date().getFullYear();
  languages: string[] = this.database.languages;

  constructor(
    private router: Router,
    private database: DatabaseService
  ) { }

  navigateInnerPage(language: string): void {
    if (language.toLowerCase() === "english") { language = "en"; localStorage.setItem("lang", "en"); }
    else if (language.toLowerCase() === "arabic") { language = "ar"; localStorage.setItem("lang", "ar"); }
    else if (language.toLowerCase() === "french") { language = "fr"; localStorage.setItem("lang", "fr"); }
    if (language === 'ar') {
      localStorage.setItem("isRTL", "true");
      this.router.navigate(['/home']).then((): void => {
        window.location.reload();
      });
    } else { localStorage.setItem("isRTL", "false"); }
    this.router.navigate(['/home']).then((): void => {
      window.location.reload();
    });
  }
}
