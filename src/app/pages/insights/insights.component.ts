import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit, OnDestroy, AfterViewInit {

  //variable sections


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
  navigateLanguagesPage(): void {
    this.router.navigate(['/languages']);
  }

  navigateInsightsPage(): void {
    this.router.navigate(['/insights']);
  }

  LogoActive() {
  }

  navigateVipPage() {
    this.router.navigate(['/vip']);
  }
  navigateInnerPage() {
    this.router.navigate(['/inner-page']);
  }

}
