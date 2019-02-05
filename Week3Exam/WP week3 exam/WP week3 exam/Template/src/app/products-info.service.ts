import { Injectable } from '@angular/core';
// import {products} from './product-comp/productArray';
import {productCls} from './product-comp/productCls';
import catalog from '../assets/catalog.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsInfoService {
  
  productArr : productCls[]  = catalog['productsJson'];

  constructor() {
    // console.log(this.productArr)
   }
}
