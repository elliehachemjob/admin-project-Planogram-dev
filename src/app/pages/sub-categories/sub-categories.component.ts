import { LogoService } from './../../services/logo.service';
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


  //variable sections
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  subCategoryName: string = "impulse";
  subCategories: any[] = this.database.subCategories;

  @ViewChild(MatAccordion) accordion: any;

  panelOpenState = false;


  // Injection dependencies If needed + 
  constructor(
    private router: Router,
    private database: DatabaseService,
  ) { }

  //Lifecycle hooks

  //When component initiate / useEffect without empty dependencies
  ngOnInit(): void {
    console.log(this.router.url, 'router')
    if (this.router.url.startsWith("/sub-categories")) {
      this.isLogoActive = true;
    }

  }

  //When component Destroyed
  ngOnDestroy(): void {

  }

  //To Control Dom elements / UseRef of react
  ngAfterViewInit() {

  }

  // Function Sections
  navigateLanguagesPage(): void {
    this.router.navigate(['/languages']);
  }

  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  logoActivation() {
  }

  navigateVipPage() {
    this.router.navigate(['/vip']);
  }

  navigateInnerPage() {
    this.router.navigate(['/home'], { replaceUrl: true });
  }

  navigateInnerVipPage() {
    this.router.navigate(['/vip-inner-page']);
  }



}
