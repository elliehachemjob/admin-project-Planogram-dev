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
          MinTwelveFacings: "Min 12 Facings",
          vipCategoryA: "VIP CategoryA ",
          impulse: "IMPULSE",
          cAndG: "c&g",
          retail: "RETAIL",
          coolers: "COOLERS",
          impulseA: "Impulse A",
          impulseB: "Impulse B",
          impulseC: "Iimpulse C",
          shelfMainPlacement: "shelf Main Placement",
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
          totalRebates: " TOTAL REBATES",
          insightTitleOne: "FUNCTIONAL PLACEMENTS: LARGE FORMATS",
          insightTitleTwo: "FUNCTIONAL PLACEMENTS: MEDIUM FORMATS",
          insightTitleThree: "FUNCTIONAL PLACEMENTS: SMALL FORMATS",
          insightDescriptionTwo: "On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.",
          insightDescriptionThree: "She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. He in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but. Questions am sincerity zealously concluded consisted or no gentleman it.",
          insightDescriptionOne: "So feel been kept be at gate. Be september it extensive oh concluded of certainty. In read most gate at body held it ever no. Talking justice welcome message inquiry in started of am me. Led own hearted highest visited lasting sir through compass his. Guest tiled he quick by so these trees am. It announcing alteration at surrounded comparison."
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
          MinTwelveFacings: "دلیل المتجر المثالي [عبوة واحدة 1]  ",
          vipCategoryA: "الفئة   ١ ",
          impulse: "بقالة",
          cAndG: "متاجر محطات الوقود",
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
          totalRebates: " إجمالي الخصوم",
          insightTitleOne: "المواضع الوظيفية: تنسيقات كبيرة",
          insightTitleTwo: "المواضع الوظيفية: الصيغ المتوسطة",
          insightTitleThree: "المواضع الوظيفية: تنسيقات صغيرة",
          insightDescriptionTwo: "على إنتاج وأشار العقيد. أربعة فقط تباع تحتاج إلى أي شيء. في سبتمبر الشك في تحديد أنه ساد الاعتراف. على تكييفها كما تم إلصاق محدود على. إعطاء ابن عم بحرارة الأشياء لا ربيع السيد يكون في الخارج. تتكرر تربية العلاقة كما اتبعت بدقة مارغريت. جلب أحد أبناء الجاذبية الخجل في انتظار لحم الخنزير.",
          insightDescriptionThree: "انها سمينة تماما نافذة المدى سواء الرسمية. إزالة الكياسة المرحب بها أو التعجيل هو. العدل عجوز بل ربما نفقة ستة لها فقرة أخرى. ممتلئًا لها العشرة مغرمًا بالمشي لا تسقط. لطلب صريح عام غير معروف هي. كان في جسد باب السيد فقط عقد جون أسفله. لذلك رحلة كبيرة أو الثغرات. أبقى رسم الباب تفعل ذلك تعال يعني فتح. لقد حفز التقدير مدى معقولية التقليل من البساطة يا سيدي ولكن. الأسئلة التي أنا بصدق خلص إليها بحماسة تتكون أو لا يوجد رجل نبيل.",
          insightDescriptionOne: "لذا أشعر أنك بقيت على البوابة. يكون سبتمبر واسع النطاق يا استنتاج يقين. في قراءة معظم البوابة في الجسم عقدها على الإطلاق لا. الحديث عن العدالة رسالة الترحيب الاستفسار في البداية أنا أنا. أدى قلبه الخاص أعلى زيارة دائمة سيدي من خلال البوصلة له. ضيف البلاط كان سريعًا حتى هذه الأشجار. تعلن عن التغيير في مقارنة محاطة."
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
          MinTwelveFacings: "Le Guide du Magasin Parfait Un Pack 2",
          vipCategoryA: "Catégorie A  ",
          impulse: "épicerie",
          cAndG: "Magasins de stations-service",
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
          TrafficFlow: " Flux de trafic  ",
          insightTitleOne: "PLACEMENTS FONCTIONNELS : GRANDS FORMATS",
          insightTitleTwo: "STAGES FONCTIONNELS : FORMATS MOYENS",
          insightTitleThree: "STAGES FONCTIONNELS : FORMATS MOYENS",
          insightDescriptionTwo: "On on produit le colonel pointé. Juste quatre vendus ont besoin de plus de combien. En septembre, les soupçons ont déterminé qu'il a prévalu en admettant. Sur adapté et tel qu'apposé limité sur. Donner chaleureusement des choses à son cousin sans printemps mr être à l'étranger. L'élevage de la relation soit aussi répété que margaret strictement suivi. Un fils de gravité a apporté de la timidité en attendant un jambon conduit régulier.",
          insightDescriptionThree: "Elle entièrement grasse, qui étend la fenêtre soit formelle. La suppression de la civilité bienvenue ou accélérée est. La justice âgée mais peut-être les dépenses de six sont-elles un autre passage. Complète ses dix marches ouvertes et non vers le bas. Pour demande générale express inconnue sont. Il dans juste le corps de la porte a tenu John vers le bas. Alors voyage grandement ou mansardes. Tirez la porte gardée, alors venez sur le moyen ouvert. L'estimation a stimulé la façon raisonnable dont la précaution diminue sa simplicité monsieur mais. Les questions sur la sincérité conclues avec zèle consistaient ou non en cela.",
          insightDescriptionOne: "Alors n'hésitez pas à rester à la porte. Soyez septembre vaste oh conclu de certitude. En lecture, la plupart des portes du corps ne l'ont jamais tenue. Parler de la justice demande de message de bienvenue au début de moi. Mené le plus cher de son cœur, visité monsieur durable à travers sa boussole. L'invité a carrelé rapidement pour que ces arbres soient. Il annonce une altération à la comparaison entourée."
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



