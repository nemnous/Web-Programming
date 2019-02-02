import { Injectable } from '@angular/core';
import {products} from './product-comp/productArray';
import {productCls} from './product-comp/productCls';
@Injectable({
  providedIn: 'root'
})
export class ProductsInfoService {
  
  productArr : productCls[] = products;

  constructor() { }
}
