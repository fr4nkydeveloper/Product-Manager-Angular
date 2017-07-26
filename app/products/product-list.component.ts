import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.js';
import { ProductService } from './product.service';


@Component({
    templateUrl : 'app/products/product-list.component.html',
    styleUrls : ['app/products/product-list.component.css'] /*este path es relativo al index.html*/
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageHeight: number = 50;
    imageShow: boolean = true;
    listFilter: string;
    errorMessage: string;


    products: IProduct[];

    /*Cuando una instancia de este componente es creada, el injector de Angular inyecta una instancia del ProductService*/
    constructor(private _productService: ProductService) {
        console.log('Constructor');
    }

    /*Recuperar datos de un servicio cuando se inicializa el componente*/
    ngOnInit(): void {
        console.log('OnInit');
        this._productService.getProducts()
            /*Hasta que nos suscribimos al servicio (En este caso que regresa un observable) , 
            se lanza el HTTP GET Request en el metodo getProducts*/
            .subscribe(
                products => this.products = products, /*products es el observable IProducts[] mapeado*/
                error => this.errorMessage = <any>error
            );
    }

    toggleImage(): void {
        this.imageShow = !this.imageShow;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List:' + message;
    }
}