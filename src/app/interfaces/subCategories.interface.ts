
export interface ISubCategories {
 subCategories: {
  country: string,
  content: [
   { title: string, subTitle: string, nestedDetails: { title: string, imagePath: string, flow: string, isEmptyContent: boolean; }; }
  ];
 };
}
