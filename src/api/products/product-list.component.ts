import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import { ProductService } from './product.service';



@Component({
   templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage:boolean = false;
    errorMessage: string; // this property is to handle errors
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter): this.products;
    }
    
    filteredProducts: IProduct[];
    products: IProduct[] =[];

    constructor(private productService: ProductService){  // these are the default values
       
    }

    onRatingClicked(message:string): void {
        this.pageTitle = 'Product List:' + message;
    }
    
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();  // it converts the filter criteria to lower case. We want a case insensitive comparison
        return this.products.filter((product: IProduct) => // this return the filtered list of products
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
         this.productService.getProducts().subscribe(
            products => {
                this.products = products,
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error // if the request for products fails the error is ser to throw the error
        );
     
    }
}
