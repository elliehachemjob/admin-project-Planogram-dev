import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vip-inner-page',
  templateUrl: './vip-inner-page.component.html',
  styleUrls: ['./vip-inner-page.component.scss']
})
export class VipInnerPageComponent implements OnInit {

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

  navigateInnerPage() {
    this.router.navigate(['/inner-page']);
  }
  navigateVipPage() {
    this.router.navigate(['/vip']);
  }

  LogoActive() {
  }
}
