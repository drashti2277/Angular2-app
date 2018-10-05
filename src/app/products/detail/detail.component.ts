import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  param: number;
  ProductData: any = '';
  

  constructor(private route: ActivatedRoute, private _productsService: ProductsService, private _router : Router) { }

  ngOnInit() {
    //we are using activated route  for snapshot
    this.param = this.route.snapshot.params['id'];
    this.ProductData = this._productsService.getProducts().find(value => value.productId == this.param);
  }
  
   back(){
     this._router.navigate(['/products']);
   }

}
