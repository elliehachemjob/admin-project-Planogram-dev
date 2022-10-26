import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-table',
  templateUrl: './gift-table.component.html',
  styleUrls: ['./gift-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftTableComponent implements OnInit {

  //variable sections
  categoryName: string = 'CATEGORY A';
  categoryHeaderName: any = { title: "Impulse VIP A", before: "before", after: "after" }
  categoriesTableContent: any[] = [{ title: "RECOMMENDED SHELF PRICE	", beforeValue: "10.00", afterValue: "10.00" }, { title: "VAT", beforeValue: "0.48", afterValue: "0.48" }, { title: "SHELF PRICE EXCLUDING VAT	", beforeValue: "53.70	", afterValue: "55.337" }, { title: "EXCISE TAX	", beforeValue: "10.00	", afterValue: "10.00	" }, { title: "REBATE %	", beforeValue: "10.00", afterValue: "55.337" }, { title: "TOTAL REBATES	", beforeValue: "14.00", afterValue: "11" }, { title: "RECOMMENDED SHELF PRICE", beforeValue: "27.120	", afterValue: "10" }]
  planogramQuickSearchPlaceHolder: string = "planogramQuickSearchPlaceHolder"




  // Injection dependencies If needed + 
  constructor(
    private router: Router
  ) { }

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



  navigateInnerVipPage() {
    this.router.navigate(['/vip-inner-page']);
  }

}
