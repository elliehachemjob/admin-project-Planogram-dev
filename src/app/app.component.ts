import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
//For translation
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  //variable sections
  Variable: number = 5;
  Variable2: string = "2";
  Variable3: [] = [];
  Variable4: {} = { key: "value" }


  // Injection dependencies If needed + 
  constructor(private translate: TranslateService) {
    //Default fallback language
    translate.setDefaultLang('en');
    //Change language here
    translate.use('en');
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
