import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailGuard implements CanActivate{

    constructor(private _router: Router){

    }

    /** ActivatedRouteSnapshot contiene informacion de la ruta*/
    canActivate(route: ActivatedRouteSnapshot): boolean{
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1 ){
            alert(id + " No es un numero valido");
            //redirect a products
            this._router.navigate(['/products']);
            //aborta la navegacion actual
            return false
        }
        return true;
    }


}