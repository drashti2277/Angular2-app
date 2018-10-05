import { Component, OnInit } from '@angular/core';
//we dont want to make this globally availble but just in this product component so we imported our productservice here.
import { ProductsService } from '../products.service'

@Component({
  //after importeing we need to provide it in our meta data so we included productservice as provider in @component.
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ProductsService]
})
export class ProductsComponent implements OnInit {
  pageTitle: string ="Product-List";
  
  products: any = [];

showHideImage: boolean = false;

// after creating a service we need an instance to work with so we used constructor to do that

  constructor( private _productService : ProductsService) { }
  
// in order to access each and every stage of a component we have methods call lifecycle hooks
  ngOnInit() {
    this.products = this._productService.getProducts();
  }
 
toggleImage(): void {
  this.showHideImage = !this.showHideImage;
}
 ratingParentFn(ratingval:string){
  // console.log(ratingval);
  this.pageTitle = ratingval;
 }
  }
 