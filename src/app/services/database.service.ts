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
  tableCategoryName: string = 'CATEGORY A';
  tableCategoryHeaderName: any = [{ title: "Impulse VIP A", before: "before", after: "after" }];
  chosenLanguages: any = ["English", "Arabic", "French"];
  subCategoryName: any = "impulse";
  vipCategoriesDetailsHeader: any = "VIP CATEGORY A";
  categories: any = [
    {
      "country": "Lebanon",
      "content": [
        { title: "impulse", background: "impulse" }, { title: "c&g", background: "cg" }, { title: "retail", background: "retail" }, { title: "coolers", background: "coolers" }
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
        { title: "Impulse A", subTitle: "1 shelf - main placement", nestedDetails: { title: "12 Facings", imagePath: "/assets/subCategory/1.png", flow: "Traffic Flow", isEmptyContent: false } }, { title: "Impulse B", subTitle: "1 shelf - main placement", nestedDetails: { title: "12 Facings", imagePath: "/assets/subCategory/1.png", flow: "Traffic Flow", isEmptyContent: false } }, { title: "Impulse C", subTitle: "1 shelf - main placement", nestedDetails: { title: "12 Facings", imagePath: "/assets/subCategory/1.png", flow: "Traffic Flow", isEmptyContent: false } }
      ]
    },
    {
      "country": "Qatar",
      "content": [
        { title: "Impulse A", subTitle: "1 shelf - main placement", nestedDetails: { title: "12 Facings", imagePath: "/assets/subCategory/1.png", flow: "Traffic Flow", isEmptyContent: false } }, { title: "Impulse B", subTitle: "1 shelf - main placement", nestedDetails: { title: "12 Facings", imagePath: "/assets/subCategory/1.png", flow: "Traffic Flow", isEmptyContent: false } }
      ]
    },
  ];
  vipCategories = [
    {
      "country": "Lebanon",
      "content": [
        "Category A", "Category B", "Category C"
      ]
    },
    {
      "country": "Qatar",
      "content":
        ["Category A", "Category B"]
    },
  ];
  vipCategoriesDetailsContent = [
    {
      "country": "Lebanon",
      "content": [{ title: "Main Placement Chilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min 13 facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "Min 12 facings", path: "/assets/vip/1.png" }, { title: "Main Placement New", numberedElementPartOne: " #3", numberedElementPartTwo: "Min 13 facings", path: "/assets/vip/1.png" }]
    },
    {
      "country": "Qatar",
      "content":
        [{ title: "Main Placement Chilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min 13 facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "Min 12 facings", path: "/assets/vip/1.png" }]

    },
  ];
  inSightsCategories = [
    {
      "country": "Lebanon",
      "content": [{
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
      ]

    },
    {
      "country": "Qatar",
      "content":
        [{
          title: "FUNCTIONAL PLACEMENTS: LARGE FORMATS", description: "On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.",
          path: "assets/good-read-1.PNG",
          explorePdf: "/assets/pdf/1.pdf"
        }, {
          title: "FUNCTIONAL PLACEMENTS: SMALL FORMATS", description: "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. He in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but. Questions am sincerity zealously concluded consisted or no gentleman it.",
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
        "This is a special members club where you will receive discounts based on counterparts in store that will drive incremental sales, helping you earn more profit!"
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
