import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // Data after going to the backend site
  // 1. done on welcome page , in the get method which what we need really here done (no other methods needed here)
  // 2. siteName in welcome page
  // 3. For each country chosen we go to a new endpoint (done)

  siteName: string = "WINGMAN";
  planogramQuickSearchPlaceHolder: any = "planogramQuickSearchPlaceHolder";
  tableCategoryName: string = 'CategoryA';
  tableCategoryHeaderName: any = [{ title: "impulseVIPA", before: "before", after: "after" }];
  chosenLanguages: any = ["English", "Arabic", "French"];
  subCategoryName: any = "impulse";
  vipCategoriesDetailsHeader: any = "vipCategoryA";
  categories: any = [
    {
      "country": "Lebanon",
      "content": [
        { title: "impulse", background: "impulse" }, { title: "cAndg", background: "cg" }, { title: "retail", background: "retail" }, { title: "coolers", background: "coolers" }
      ]
    },
    {
      "country": "Qatar",
      "content": [
        { title: "impulse", background: "impulse" }
      ]
    },
  ];

  subCategories: any = [
    {
      "country": "Lebanon",
      "content": [
        { title: "impulseA", subTitle: "shelfMainPlacement", nestedDetails: { title: "tweleveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }, { title: "impulseB", subTitle: "shelfMainPlacement", nestedDetails: { title: "tweleveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }, { title: "impulseC", subTitle: "shelfMainPlacement", nestedDetails: { title: "tweleveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }
      ]
    },
    {
      "country": "Qatar",
      "content": [
        { title: "impulseA", subTitle: "shelfMainPlacement", nestedDetails: { title: "tweleveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }, { title: "impulseB", subTitle: "shelfMainPlacement", nestedDetails: { title: "tweleveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }
      ]
    },
  ];
  vipCategories = [
    {
      "country": "Lebanon",
      "content": [
        "CategoryA", "CategoryB", "CategoryC"
      ]
    },
    {
      "country": "Qatar",
      "content":
        ["CategoryA", "CategoryB"]
    },
  ];
  vipCategoriesDetailsContent = [
    {
      "country": "Lebanon",
      "content": [{ title: "MainPlacementChilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min13facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "MintweleveFacings", path: "/assets/vip/1.png" }, { title: "MainPlacementNew", numberedElementPartOne: " #3", numberedElementPartTwo: "Min13facings", path: "/assets/vip/1.png" }]
    },
    {
      "country": "Qatar",
      "content":
        [{ title: "MainPlacementChilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min13facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "MintweleveFacings", path: "/assets/vip/1.png" }]

    },
  ];
  inSightsCategories = [
    {
      "country": "Lebanon",
      "content": [{
        title: "functionalPlacementsLargeFormats", description: "JustFoursold",
        path: "assets/good-read-1.PNG",
        explorePdf: "/assets/pdf/1.pdf"
      }, {
        title: "functionalPlacementsSmall", description: "extentEitherFormal",
        path: "assets/good-read-2.PNG",
        explorePdf: "/assets/pdf/2.pdf"
      }, {
        title: "functionalPlacementsMediumFormats", description: "beatGate",
        path: "assets/good-read-3.PNG",
        explorePdf: "/assets/pdf/3.pdf"
      }
      ]

    },
    {
      "country": "Qatar",
      "content":
        [{
          title: "functionalPlacementsLargeFormats", description: "JustFoursold",
          path: "assets/good-read-1.PNG",
          explorePdf: "/assets/pdf/1.pdf"
        }, {
          title: "functionalPlacementsSmall", description: "extentEitherFormal",
          path: "assets/good-read-2.PNG",
          explorePdf: "/assets/pdf/2.pdf"
        }
        ]

    },
  ];
  vipHeaderText = [
    {
      "country": "Lebanon",
      "content": [
        "specialPromotion"
      ]
    },
    {
      "country": "Qatar",
      "content":
        [
          "This is a Qatar members club where you will receive discounts based on counterparts in store that will drive incremental sales, helping you earn more profit!"
        ]
    },
  ];
  categoriesTableContent = [
    {
      "country": "Lebanon",
      "content": [{ title: "recommendedShelfPrice", beforeValue: "10.00", afterValue: "10.00" }, { title: "VAT", beforeValue: "0.48", afterValue: "0.48" }, { title: "shelfPriceExcludingVat", beforeValue: "53.70	", afterValue: "55.337" }, { title: "exciseTax", beforeValue: "10.00", afterValue: "10.00	" }, { title: "rebatePercentage", beforeValue: "10.00", afterValue: "55.337" }, { title: "totalRebates", beforeValue: "14.00", afterValue: "11" }, { title: "recommendedShelfPrice", beforeValue: "27.120", afterValue: "10" }]
    },
    {
      "country": "Qatar",
      "content":
        [{ title: "recommendedShelfPrice", beforeValue: "10.00", afterValue: "10.00" }, { title: "VAT", beforeValue: "0.48", afterValue: "0.48" }, { title: "shelfPriceExcludingVat", beforeValue: "53.70	", afterValue: "55.337" }, { title: "exciseTax", beforeValue: "10.00", afterValue: "10.00	" }]
    },
  ];
  languages = [
    {
      "country": "Lebanon",
      "content": [
        "Arabic", "French", "Urdu", "English"
      ]
    },
    {
      "country": "Qatar",
      "content":
        ["Arabic", "English"]
    },
  ];
  countries: string[] = ["UAE", "MALDIVES", "PAKISTAN", "SRILANKA", "ALGERIA", "NIGERIA", "ANGOLA", "MAURITIUS", "KENYA", "EGYPT", "OMAN", "KUWAIT", "QATAR", "JORDAN", "BAHRAIN", "KSA", "LEBANON", "GHANA"];





}
