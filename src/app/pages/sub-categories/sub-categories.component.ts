import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubCategoriesComponent implements OnInit {
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  subCategoryName: string = "impulse";
  subCategories: any[] = this.database.subCategories;
  @ViewChild(MatAccordion) accordion: any;
  panelOpenState = false;

  constructor(
    private router: Router,
    private database: DatabaseService,
  ) { }
  ngOnInit(): void {
    if (this.router.url.startsWith("/sub-categories")) {
      this.isLogoActive = true;
    }
  }

  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  navigateVipPage() {
    this.router.navigate(['/vip']);
  }

  navigateInnerPage() {
    this.router.navigate(['/home'], { replaceUrl: true });
  }

}
