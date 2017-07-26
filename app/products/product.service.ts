import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductService{

    private _productUrl = 'api/products/products.json';
    
    //Inyectamos la instancia del servicio HTTP en la variable _http
    constructor(private _http: Http){}


    getProducts(): Observable<IProduct[]> {
      return this._http.get(this._productUrl)
                .map((response:Response) => response.json())
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError)
    } 

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
    
}

   

