import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component( {
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: [ './welcome-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class WelcomePageComponent
{
  siteName: string = "WINGMAN";
  year: Number = new Date().getFullYear();
  countries: string[] = this.database.countries;


  constructor (
    private router: Router,
    private database: DatabaseService
  ) { }

  navigateLanguagesPage ( country: string ): void
  {
    window.localStorage.setItem( "country", country );
    this.router.navigate( [ '/languages' ] );
  }

}
