import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    /*En este caso no tendra un selector, ya que este componente no se anidara a otro, sino que se mostrar con routing*/
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle: string = 'Product Detail';
    product: IProduct;

    /*Para mostrar el producto adecuado, el componente lee el parametro de la URL*/
    /*Esto se realiza con la ayuda del servicio ActivatedRoute*/ 
    constructor(private _route: ActivatedRoute, private _router: Router){}

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id']; /*con + convertimos el parametro string a un id numerico*/ 
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }



}