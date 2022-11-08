import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getMethod } from 'src/app/helpers/helpers';
import { DatabaseService } from 'src/app/services/database.service';
import ISO6391 from 'iso-639-1';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-gift-table',
  templateUrl: './gift-table.component.html',
  styleUrls: ['./gift-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftTableComponent implements OnInit {
  categoryName: string = this.database.tableCategoryName;
  categoryHeaderName: any = this.database.tableCategoryHeaderName;
  categoriesTableContent: any = this.database.categoriesTableContent;
  planogramQuickSearchPlaceHolder: string = this.database.planogramQuickSearchPlaceHolder;
  langSelected: any = "";
  constructor(
    private router: Router,
    private database: DatabaseService,
    private common: CommonService
  ) { }

  ngOnInit(): void {
    this.langSelected = this.common.getAndSetLanguage(this.langSelected);
    this.categoriesTableContent = getMethod(this.categoriesTableContent, localStorage.getItem("country")?.toLowerCase());
  }

  navigateInnerVipPage(): void {
    this.router.navigate(['/vip-inner-page'], { replaceUrl: true });
  }




}
