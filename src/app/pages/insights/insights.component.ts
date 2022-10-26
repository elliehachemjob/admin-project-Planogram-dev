import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsightsComponent implements OnInit, OnDestroy, AfterViewInit {
  //variable sections
  isHidden: boolean = true;
  isLogoActive: boolean = false;
  insights: any = [{
    title: "FUNCTIONAL PLACEMENTS: LARGE FORMATS", description: "On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.",
    path: "assets/good-read-1.PNG",
    explorePdf: "/assets/pdf/1.pdf"
  }, {
    title: "FUNCTIONAL PLACEMENTS: SMALL FORMATS", description: "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. He in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but. Questions am sincerity zealously concluded consisted or no gentleman it.",
    path: "assets/good-read-2.PNG",
    explorePdf: "/assets/pdf/2.pdf"
  }, {
    title: "FUNCTIONAL PLACEMENTS: MEDIUM FORMATS", description: "So feel been kept be at gate. Be september it extensive oh concluded of certainty. In read most gate at body held it ever no. Talking justice welcome message inquiry in started of am me. Led own hearted highest visited lasting sir through compass his. Guest tiled he quick by so these trees am. It announcing alteration at surrounded comparison.",
    path: "assets/good-read-3.PNG",
    explorePdf: "/assets/pdf/3.pdf"
  }
  ];

  // Injection dependencies If needed + 
  constructor(
    private router: Router,
    public logoService: LogoService,
  ) { }

  //Lifecycle hooks

  //When component initiate / useEffect without empty dependencies
  ngOnInit(): void {
    console.log(this.router.url, 'router')
    if (this.router.url.startsWith("/insights")) {
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
    this.router.navigate(['/home']);
  }

  navigateInnerVipPage() {
    this.router.navigate(['/vip-inner-page']);
  }

  subCatsAccordion(isEmptyContent: boolean = true) {
    if (!isEmptyContent) this.isHidden = !this.isHidden;
  }



}
