import { Component, OnInit } from '@angular/core';
import {ProductsInfoService} from '../products-info.service';
import {productCls} from './productCls';
import {products} from './productArray';

@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrls: ['./product-comp.component.css']
})

export class ProductCompComponent implements OnInit {

  productArr : productCls[] = this.ProductsServiceObj.productArr;
  buttId :number;
  descript : any;
  text : string;
  edit(event : MouseEvent) {
    this.buttId = event.path[0].id;
    this.text = (<HTMLTextAreaElement>document.getElementById("txt"+this.buttId)).value;
    (<HTMLTextAreaElement>document.getElementById("txt"+this.buttId)).value = "";
    this.ProductsServiceObj.productArr[this.buttId].description = this.text;    
    console.log(this.text);
  }
  delete(event : MouseEvent) {
    this.buttId = event.path[0].id;
    this.ProductsServiceObj.productArr.splice(this.buttId, 1);
    alert("Product Removed");
    console.log(this.ProductsServiceObj.productArr);
  }
  constructor(public ProductsServiceObj : ProductsInfoService) {
   }

  ngOnInit() {
  }

}
