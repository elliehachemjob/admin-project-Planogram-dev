import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-gift-table',
  templateUrl: './gift-table.component.html',
  styleUrls: ['./gift-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftTableComponent implements OnInit {
  categoryName: string = 'CATEGORY A';
  categoryHeaderName: any = { title: "Impulse VIP A", before: "before", after: "after" }
  categoriesTableContent: any[] = this.database.categoriesTableContent;

  planogramQuickSearchPlaceHolder: string = "planogramQuickSearchPlaceHolder"

  constructor(
    private router: Router,
    private database: DatabaseService
  ) { }

  ngOnInit(): void {
    this.chooseGiftCategory(localStorage.getItem("country")?.toLowerCase(), this.categoriesTableContent)

  }

  navigateInnerVipPage() {
    this.router.navigate(['/vip-inner-page'], { replaceUrl: true });
    this.chooseGiftCategory(localStorage.getItem("country")?.toLowerCase(), this.categoriesTableContent)
  }

  chooseGiftCategory(countryChosen: any, listOfCountries: any): void {
    this.categoriesTableContent = listOfCountries.filter((data: any) => data.country.toLowerCase() === countryChosen.toLowerCase());
    this.categoriesTableContent.map(item => this.categoriesTableContent = item.content)
  }


}
