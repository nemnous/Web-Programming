import { Component, OnInit } from '@angular/core';
import {ProductsInfoService} from '../products-info.service';
import {productCls} from './productCls';
// import {products} from './productArray';

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
  name: string;
  quantity : string;
  edit($event : any) {
    console.log($event);
    this.buttId = $event.path[0].id;
    this.name = (<HTMLTextAreaElement>document.getElementById("name"+this.buttId)).value;
    this.quantity = (<HTMLTextAreaElement>document.getElementById("quantity"+this.buttId)).value;
    this.text = (<HTMLTextAreaElement>document.getElementById("txt"+this.buttId)).value;
    (<HTMLTextAreaElement>document.getElementById("quantity"+this.buttId)).value = "";
    (<HTMLTextAreaElement>document.getElementById("name"+this.buttId)).value = "";
    (<HTMLTextAreaElement>document.getElementById("txt"+this.buttId)).value = "";
    this.ProductsServiceObj.productArr[this.buttId].title = this.name;
    this.ProductsServiceObj.productArr[this.buttId].quantity = this.quantity;
    this.ProductsServiceObj.productArr[this.buttId].description = this.text;    
    console.log(this.text);
  }
  delete($event : any) {
    this.buttId = $event.path[0].id;
    this.ProductsServiceObj.productArr.splice(this.buttId, 1);
    alert("Product Removed");
    console.log(this.ProductsServiceObj.productArr);
  }
  constructor(public ProductsServiceObj : ProductsInfoService) {
   }

  ngOnInit() {
  }

}
