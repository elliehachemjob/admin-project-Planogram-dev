import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component( {
  selector: 'app-gift-table',
  templateUrl: './gift-table.component.html',
  styleUrls: [ './gift-table.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class GiftTableComponent implements OnInit
{
  categoryName: string = 'CATEGORY A';
  categoryHeaderName: { title: string; before: string; after: string; } = { title: "Impulse VIP A", before: "before", after: "after" };
  categoriesTableContent: any[] = this.database.categoriesTableContent;

  planogramQuickSearchPlaceHolder: string = "planogramQuickSearchPlaceHolder";

  constructor (
    private router: Router,
    private database: DatabaseService
  ) { }

  ngOnInit (): void
  {
    this.getGiftCategory( localStorage.getItem( "country" )?.toLowerCase(), this.categoriesTableContent );

  }

  navigateInnerVipPage (): void 
  {
    this.router.navigate( [ '/vip-inner-page' ], { replaceUrl: true } );
  }

  getGiftCategory ( countryChosen: any, listOfCountries: any ): void
  {
    this.categoriesTableContent = listOfCountries.filter( ( data: any ): boolean => data.country.toLowerCase() === countryChosen.toLowerCase() );
    this.categoriesTableContent.map( item => this.categoriesTableContent = item.content );
  }


}
