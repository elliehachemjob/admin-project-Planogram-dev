import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
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









}
