export function getMethod(mainContent: any, countryChosen: any): void {
 mainContent = mainContent.filter((data: any): boolean => data.country.toLowerCase() === countryChosen.toLowerCase());
 mainContent.map((item: any) => mainContent = item.content);
 return mainContent;
}


