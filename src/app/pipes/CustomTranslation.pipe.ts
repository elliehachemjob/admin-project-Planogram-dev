import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomTranslation'
})








export class CustomTranslationPipe implements PipeTransform {

  //Those object to be replaced by the Api
  langObject: any = [
    {
      "lang": "en",
      "content": [
        {
          planogramQuickSearchPlaceHolder: "Planogram Quick Search"
        }
      ]
    },
    {
      "lang": "ar",
      "content": [
        {
          planogramQuickSearchPlaceHolder: "بحث سريع"
        }
      ]
    },
    {
      "lang": "fr",
      "content": [
        {
          planogramQuickSearchPlaceHolder: "بحث سريع"
        }
      ]
    },
  ];

  transform(value: string, lang: string): any {
    this.setLanguageSelected(lang);
    return value;
  }

  setLanguageSelected(lang: any) {

    //Usually Here will be the api, which will tell us the language chosen 





    localStorage.setItem("translationObject", JSON.stringify(``));
  }

}



