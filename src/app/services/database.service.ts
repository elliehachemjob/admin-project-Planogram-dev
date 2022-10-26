import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  subCategories: any = [{ title: "smpulse A", subTitle: "1 shelf - main placement", nestedDetails: { title: "12 Facings", imagePath: "https://wingmanapi.rbprojects.me/public/uploads/product/1630222037.png", flow: "Traffic Flow", isEmptyContent: false } }, { title: "Impulse B", subTitle: "1 shelf - main placement", nestedDetails: { title: "12 Facings", imagePath: "https://wingmanapi.rbprojects.me/public/uploads/product/1630222037.png", flow: "Traffic Flow", isEmptyContent: false } }, { title: "Impulse C", subTitle: "1 shelf - main placement", nestedDetails: { title: "12 Facings", imagePath: "https://wingmanapi.rbprojects.me/public/uploads/product/1630222037.png", flow: "Traffic Flow", isEmptyContent: false } }]



  constructor() { }

}
