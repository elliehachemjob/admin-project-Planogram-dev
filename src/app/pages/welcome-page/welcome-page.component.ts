import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent {
  siteName: string = "WINGMAN"
  year: Number = new Date().getFullYear();
  countries: string[] = ["UAE", "MALDIVES", "PAKISTAN", "SRI LANKA", "ALGERIA", "NIGERIA", "ANGOLA", "MAURITIUS", "KENYA", "EGYPT", "OMAN", "KUWAIT", "QATAR", "JORDAN", "BAHRAIN", "KSA", "LEBANON", "GHANA"
  ];

  constructor(
    private router: Router
  ) { }

  navigateLanguagesPage(): void {
    this.router.navigate(['/languages']);
  }

}
