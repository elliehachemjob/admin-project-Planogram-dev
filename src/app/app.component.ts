import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
//For translation
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  //variable sections
  isRTL: boolean = false;


  // Injection dependencies If needed + 
  constructor(private translate: TranslateService,
    private translation: TranslationService
  ) {
    //Default fallback language
    translate.setDefaultLang('en');

    //Change language here
    translate.use('fr');

    if (localStorage.getItem("isRTL") === "true") {
      this.isRTL = true;
      console.log("true")

    } else {
      this.isRTL = false;
      console.log("false")
    }


  }


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
  valueChange(): void {

  }





}
