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
  tableCategoryHeaderName: any = [{ title: "Impulse VIP A", before: "before", after: "after" }];
  chosenLanguages: any = ["English", "Arabic", "French"];
  subCategoryName: any = "impulse";
  vipCategoriesDetailsHeader: any = "vipCategoryA";
  categories: any = [
    {
      "country": "Lebanon",
      "content": [
        { title: "impulse", background: "impulse" }, { title: "cAndG", background: "cg" }, { title: "retail", background: "retail" }, { title: "coolers", background: "coolers" }
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
        { title: "impulseA", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }, { title: "impulseB", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }, { title: "impulseC", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }
      ]
    },
    {
      "country": "Qatar",
      "content": [
        { title: "Impulse A", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }, { title: "impulseB", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }
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
      "content": [{ title: "MainPlacementChilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min13facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "MinTwelveFacings", path: "/assets/vip/1.png" }, { title: "Min13facings", numberedElementPartOne: " #3", numberedElementPartTwo: "Min13facings", path: "/assets/vip/1.png" }]
    },
    {
      "country": "Qatar",
      "content":
        [{ title: "MainPlacementChilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min13facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "MinTwelveFacings", path: "/assets/vip/1.png" }]

    },
  ];
  inSightsCategories = [
    {
      "country": "Lebanon",
      "content": [{
        title: "insightTitleOne", description: "insightDescriptionTwo",
        path: "assets/good-read-1.PNG",
        explorePdf: "/assets/pdf/1.pdf"
      }, {
        title: "insightTitleTwo", description: "insightDescriptionTwo",
        path: "assets/good-read-2.PNG",
        explorePdf: "/assets/pdf/2.pdf"
      }, {
        title: "insightTitleThree", description: "insightDescriptionThree",
        path: "assets/good-read-3.PNG",
        explorePdf: "/assets/pdf/3.pdf"
      }
      ]

    },
    {
      "country": "Qatar",
      "content":
        [{
          title: "insightTitleOne", description: "insightDescriptionTwo",
          path: "assets/good-read-1.PNG",
          explorePdf: "/assets/pdf/1.pdf"
        }, {
          title: "insightTitleThree", description: "insightDescriptionTwo",
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
      "content": [{ title: "RECOMMENDED SHELF PRICE", beforeValue: "10.00", afterValue: "10.00" }, { title: "VAT", beforeValue: "0.48", afterValue: "0.48" }, { title: "SHELF PRICE EXCLUDING VAT", beforeValue: "53.70	", afterValue: "55.337" }, { title: "EXCISE TAX", beforeValue: "10.00", afterValue: "10.00	" }, { title: "REBATE %", beforeValue: "10.00", afterValue: "55.337" }, { title: "TOTAL REBATES", beforeValue: "14.00", afterValue: "11" }, { title: "RECOMMENDED SHELF PRICE", beforeValue: "27.120", afterValue: "10" }]
    },
    {
      "country": "Qatar",
      "content":
        [{ title: "RECOMMENDED SHELF PRICE", beforeValue: "10.00", afterValue: "10.00" }, { title: "VAT", beforeValue: "0.48", afterValue: "0.48" }, { title: "SHELF PRICE EXCLUDING VAT", beforeValue: "53.70	", afterValue: "55.337" }, { title: "EXCISE TAX", beforeValue: "10.00", afterValue: "10.00	" }]
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
  countries: string[] = ["UAE", "MALDIVES", "PAKISTAN", "SRI LANKA", "ALGERIA", "NIGERIA", "ANGOLA", "MAURITIUS", "KENYA", "EGYPT", "OMAN", "KUWAIT", "QATAR", "JORDAN", "BAHRAIN", "KSA", "LEBANON", "GHANA"];



}
