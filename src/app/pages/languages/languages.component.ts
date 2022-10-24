import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit, OnDestroy, AfterViewInit {

  //variable sections
  siteName: string = "WINGMAN"
  year: Number = new Date().getFullYear();
  languages: string[] = ["Portuguese", "Sinhala", "Dhivehi", "Malayalam", "Arabic", "French", "Urdu", "English"];



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


  navigateInnerPage(): void {
    this.router.navigate(['/home']);
  }




}
