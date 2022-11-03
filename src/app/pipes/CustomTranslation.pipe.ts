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
          planogramQuickSearchPlaceHolder: "Planogram Quick Search",
        }
      ]
    },
    {
      "lang": "arabic",
      "content": [
        {
          planogramQuickSearchPlaceHolder: "بحث سريع"
        }
      ]
    },
    {
      "lang": "french",
      "content": [
        {
          planogramQuickSearchPlaceHolder: "بحث سريع"
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



