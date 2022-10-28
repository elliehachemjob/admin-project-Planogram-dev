import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
//For translation
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isRTL: boolean = false;
  language: any = localStorage.getItem("lang")

  constructor(private translate: TranslateService,
    private translation: TranslationService
  ) {
    translate.setDefaultLang('en');

    translate.use(this.language);

    if (localStorage.getItem("isRTL") === "true") {
      this.isRTL = true;

    } else {
      this.isRTL = false;
    }
  }
}
