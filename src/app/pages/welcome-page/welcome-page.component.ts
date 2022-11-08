import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import ISO6391 from 'iso-639-1';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent implements OnInit {
  //All countries should be listed here by default so the logic here is to get + navigate to other page
  //when navigating take in consideration  the dynamic navigation and fix possible bugs like spacing between countries

  siteName: string = this.database.siteName; // done
  year: Number = new Date().getFullYear(); // done
  countries: string[] = this.database.countries; // done
  langSelected: any; //done


  constructor(
    private router: Router,
    private database: DatabaseService,
    private common: CommonService
  ) { }

  ngOnInit(): void {
    this.langSelected = this.common.getAndSetLanguage(this.langSelected); //done
  }

  navigatelanguagesPageSelectALanguageToStart(country: string): void {
    window.localStorage.setItem("country", country);
    this.router.navigate(['/languages', country.toLowerCase().replace(/\s+/g, '')]);
  } // done for this function

}
