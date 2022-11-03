import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomTranslation'
})








export class CustomTranslationPipe implements PipeTransform {

  //Those object to be replaced by the Api
  langObject: any = [
    {
      "lang": "english",
      "content": [
        {
          welcomeProgram: "program",
          welcomeSelectACountryToStart: "Select country to start",
          languagesPageSelectALanguageToStart: "Select language from above to start",
          specialPromotion: "This is a special members club where you will receive discounts based on counterparts in store that will drive incremental sales, helping you earn more profit!!",
          CategoryA: "Category A ",
          CategoryB: "Category B ",
          CategoryC: "Category C ",
          insightsPageHeaderContent: "Good Read",
          insightsPageExplore: "Explore",
          UAE: "UAE",
          MALDIVES: "MALDIVES",
          PAKISTAN: "PAKISTAN",
          SRILANKA: "SRILANKA",
          ALGERIA: "ALGERIA",
          NIGERIA: "NIGERIA",
          ANGOLA: "ANGOLA",
          MAURITIUS: "MAURITIUS",
          KENYA: "KENYA",
          EGYPT: "EGYPT",
          OMAN: "OMAN",
          QATAR: "QATAR",
          JORDAN: "JORDAN",
          BAHRAIN: "BAHRAIN",
          KSA: "KSA",
          LEBANON: "LEBANON",
          GHANA: "GHANA",
          planogramQuickSearchPlaceHolder: "Planogram Quick Search ",
          Discover: "Discover",
          VIP: "VIP",
          INSIGHTS: "INSIGHTS",
          MainPlacementChilled: "Main Placement Chilled",
          Range: "Range",
          mainPlacementNew: "MainPlacementNew ",
          Min13facings: "Min 13 facings",
          MintweleveFacings: "Min tweleveFacings",
          vipCategoryA: "VIP CategoryA ",
          impulse: "IMPULSE",
          cAndg: "c&g",
          retail: "RETAIL",
          coolers: "COOLERS",
          impulseA: "Impulse A",
          impulseB: "Impulse B",
          impulseC: "Iimpulse C",
          shelfMainPlacement: "shelfMainPlacement",
          functionalPlacementsLarge: "JustFoursold",
          functionalPlacementsSmall: "functionalPlacementsSmall ",
          extentEitherFormal: "sir but. Questions am sincerity zealously concluded consisted or no gentleman it ",
          mediumFormats: "beatGate ",
          beatGate: "beatGate",
          tweleveFacings: "12 Facings",
          TrafficFlow: "Traffic Flow",
          before: " before ",
          after: " after ",
          impulseVIPA: "Impulse VIP A",
          recommendedShelfPrice: " RECOMMENDED SHELF PRICE",
          shelfPriceExcludingVat: "SHELF PRICE EXCLUDING VAT",
          VAT: " VAT",
          exciseTax: " EXCISE TAX",
          rebatePercentage: " REBATE %",
          totalRebates: " TOTAL REBATES"
        }
      ]
    },
    {
      "lang": "arabic",
      "content": [
        {
          welcomeProgram: "program",
          welcomeSelectACountryToStart: "Select country to start",
          program: "program",
          languagesPageSelectALanguageToStart: "Select language from above to start",
          specialPromotion: "هذا نادي خاص للأعضاء حيث ستتلقى خصومات بناءً على نظرائك في المتجر والتي ستؤدي إلى زيادة المبيعات ، مما يساعدك على كسب المزيد من الأرباح!",
          insightsPageHeaderContent: "قراءة جيدة ",
          insightsPageExplore: "استكشف",
          UAE: "UAE",
          MALDIVES: "MALDIVES",
          PAKISTAN: "PAKISTAN",
          SRILANKA: "SRILANKA",
          ALGERIA: "ALGERIA",
          NIGERIA: "NIGERIA",
          ANGOLA: "ANGOLA",
          MAURITIUS: "MAURITIUS",
          KENYA: "KENYA",
          EGYPT: "EGYPT",
          OMAN: "OMAN",
          QATAR: "QATAR",
          JORDAN: "JORDAN",
          BAHRAIN: "BAHRAIN",
          KSA: "KSA",
          LEBANON: "LEBANON",
          GHANA: "GHANA",
          planogramQuickSearchPlaceHolder: "بحث سريع",
          Discover: "اكتشف النص",
          VIP: "VIP",
          INSIGHTS: "أفكار",
          CategoryA: "الفئة   ١",
          CategoryB: "الفئة    ٢",
          CategoryC: "الفئة    ٣",
          MainPlacementChilled: "توفر جمیع وحدات تخزین  ",
          Range: "دلیل المتجر المثالي  ",
          MainPlacementNew: "وحدات تخزین  ",
          Min13facings: "دلیل المتجر المثالي [عبوة واحدة 1]   ",
          MintweleveFacings: "دلیل المتجر المثالي [عبوة واحدة 1]  ",
          vipCategoryA: "الفئة   ١ ",
          impulse: "بقالة",
          cAndg: "متاجر محطات الوقود",
          retail: "سوبر ماركت",
          coolers: "البرادات",
          impulseA: "مكان رئيسي صغير",
          impulseB: "مكان رئيسي متوسط",
          impulseC: "مكان رئيسي كبير",
          functionalPlacementsLargeFormats: "نقاط البيع الإضافية المؤقتة  ",
          JustFoursold: "نقاط البيع الإضافية المؤقتة تعمل على تسهيل الشراء وتزيد من المبيعا",
          functionalPlacementsSmall: "العرض العملي: الأسواق الكبيرة  ",
          functionalPlacementsMediumFormats: "العرض العملي: الأسواق الكبيرة  ",
          beatGate: "يؤدي تواجد المشروبات الباردة بالقرب من الكاشير إلى زيادة نسبة المبيعات وجذب المزيد من المتسوقين  ",
          tweleveFacings: " مواجهة ١٢  ",
          TrafficFlow: " تدفق حركة المرور  ",
          shelfMainPlacement: " تدفق حركة المرور  ",
          before: " قبل ",
          after: " بعد ",
          impulseVIPA: " دفعةالفئ  ١ ",
          recommendedShelfPrice: " الفئة   ١",
          shelfPriceExcludingVat: " الفئة   ١",
          VAT: " ضريبة القيمة المضافة",
          exciseTax: " الضريبة",
          rebatePercentage: " الخصوم",
          totalRebates: " إجمالي الخصوم"
        }
      ]
    },
    {
      "lang": "french",
      "content": [
        {
          welcomeProgram: "program",
          welcomeSelectACountryToStart: "Select country to start",
          languagesPageSelectALanguageToStart: "Select language from above to start",
          specialPromotion: "Il s'agit d'un club de membres spécial où vous recevrez des remises basées sur les homologues en magasin qui généreront des ventes supplémentaires, vous aidant à gagner plus de profit !",
          insightsPageHeaderContent: "bonne lecture ",
          insightsPageExplore: "explorer",
          UAE: "UAE",
          MALDIVES: "MALDIVES",
          PAKISTAN: "PAKISTAN",
          SRILANKA: "SRILANKA",
          ALGERIA: "ALGERIA",
          NIGERIA: "NIGERIA",
          ANGOLA: "ANGOLA",
          MAURITIUS: "MAURITIUS",
          KENYA: "KENYA",
          EGYPT: "EGYPT",
          OMAN: "OMAN",
          QATAR: "QATAR",
          JORDAN: "JORDAN",
          BAHRAIN: "BAHRAIN",
          KSA: "KSA",
          LEBANON: "LEBANON",
          GHANA: "GHANA",
          planogramQuickSearchPlaceHolder: "Recherche rapide",
          Discover: "Découvrir",
          VIP: "VIP",
          INSIGHTS: "CONNAISSANCES",
          CategoryA: "Catégorie A",
          CategoryB: "Catégorie B",
          CategoryC: "Catégorie C",
          MainPlacementChilled: "Disponibilité de toutes les unités de stockage  ",
          Range: "Disponibilité de toutes les unités de stockage  ",
          MainPlacementNew: "unités de stockage  ",
          Min13facings: "Le Guide du Magasin Parfait Un Pack 1 ",
          MintweleveFacings: "Le Guide du Magasin Parfait Un Pack 2",
          vipCategoryA: "Catégorie A  ",
          impulse: "épicerie",
          cAndg: "Magasins de stations-service",
          retail: "Supermarché",
          coolers: "réfrigérateurs",
          impulseA: "petite place principale",
          impulseB: "Place principale moyenne",
          impulseC: "Grande place principale",
          shelfMainPlacement: "1 étagère - place principale",
          functionalPlacementsLargeFormats: "1 étagère | 10 interfaces  ",
          JustFoursold: "Des points de vente supplémentaires temporaires facilitent l'achat et augmentent les ventes",
          functionalPlacementsSmall: "Pratique : Grands marchés  ",
          functionalPlacementsMediumFormats: "Pratique : Grands marchés  ",
          beatGate: "La présence de boissons fraîches près de la caisse augmente les ventes et attire plus de clients  ",
          tweleveFacings: " visage 12  ",
          TrafficFlow: " Flux de trafic  "
        }
      ]
    },
  ];

  transform(value: string, lang: string): any {
    this.setLanguageSelected(lang, this.langObject);
    Object.entries(this.langObject).forEach(
      ([key, valueOfObject]: any) => {
        console.log(key, valueOfObject);
        if (key === value) {
          value = valueOfObject;
        }
      }
    );
    return value;
  }

  setLanguageSelected(countryChosen: any, listOfCountries: any) {
    //Usually Here will be the api, which will tell us the language chosen 
    this.langObject = listOfCountries.filter((data: any): boolean => data.lang.toLowerCase() === countryChosen.toLowerCase());
    this.langObject.map((item: any): any => this.langObject = item.content);
    this.langObject = this.langObject[0];


    localStorage.setItem("translationObject", JSON.stringify(this.langObject));
  }

}



