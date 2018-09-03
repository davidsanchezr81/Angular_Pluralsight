import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../api/products/product';
import {ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle: string ='Product Detail';
product: IProduct;


  constructor(private route: ActivatedRoute) { } // activatedroute is injected in this component

  ngOnInit() { //OnInit Lifecycle Hook

    let id = +this.route.snapshot.paramMap.get('id'); // the + is a JS shortcut to convert string to numeric id
   //1) lets get the id from the route and store it in a local variable
// instead of using observable, we use snapshot because we dont expect the Url to change
// 2) .route.snapshot get the parameter
//3)
this.pageTitle += `: ${id}`;
this.product = {
  'productId': id,
  'productName': 'Leaf Rake',
  'productCode': 'GDN-0011',
  'releaseDate': 'March 19, 2016',
  'description': 'Leaf rake with 48-inch wooden handle.',
  'price': 19.95,
  'starRating': 3.2,
  'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
}
}



}
