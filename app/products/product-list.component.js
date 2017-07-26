"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    /*Cuando una instancia de este componente es creada, el injector de Angular inyecta una instancia del ProductService*/
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageHeight = 50;
        this.imageShow = true;
        console.log('Constructor');
    }
    /*Recuperar datos de un servicio cuando se inicializa el componente*/
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit');
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, /*products es el observable IProducts[] mapeado*/ function (/*products es el observable IProducts[] mapeado*/ error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.imageShow = !this.imageShow;
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List:' + message;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-list.component.html',
        styleUrls: ['app/products/product-list.component.css'] /*este path es relativo al index.html*/
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map