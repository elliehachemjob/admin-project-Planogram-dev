import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component( {
  selector: 'app-vip-inner-page',
  templateUrl: './vip-inner-page.component.html',
  styleUrls: [ './vip-inner-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class VipInnerPageComponent implements OnInit
{
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  vipCategoriesDetailsHeader: string = "VIP CATEGORY A";
  vipCategoriesDetailsContent: any[] = this.database.vipCategoriesDetailsContent;

  constructor (
    private router: Router,
    private database: DatabaseService
  ) { }

  ngOnInit (): void
  {
    if ( this.router.url.startsWith( "/vip-inner-page" ) )
    {
      this.isLogoActive = true;
    }
    this.getVipInnerCategory( localStorage.getItem( "country" )?.toLowerCase(), this.vipCategoriesDetailsContent );
  }


  getVipInnerCategory ( countryChosen: any, listOfCountries: any ): void
  {
    this.vipCategoriesDetailsContent = listOfCountries.filter( ( data: any ): boolean => data.country.toLowerCase() === countryChosen.toLowerCase() );
    this.vipCategoriesDetailsContent.map( ( item: any ): any => this.vipCategoriesDetailsContent = item.content );
  }

  navigateInsightsPage (): void
  {
    this.router.navigate( [ '/insights' ] );
  }

  navigateVipPage (): void
  {
    this.router.navigate( [ '/vip' ], { replaceUrl: true } );
  }

  navigateInnerPage (): void
  {
    this.router.navigate( [ '/home' ] );
  }

  navigateGiftTablePage (): void
  {
    this.router.navigate( [ '/gift-table' ], { replaceUrl: true } );
  }

}
