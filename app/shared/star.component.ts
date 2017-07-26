import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core'; 


@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls:  ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    //La unica manera de pasar el valor de una propiedad a su contenedor es con un evento
    //El generico <string> es el tipo de dato que sera lo que mandemos (Event payload)
    @Output() ratingClicked: EventEmitter<string>= new EventEmitter();


    //Espera cambios de la propiedad que tenga un @input (Generados por el contenedor)
    ngOnChanges():void{
        console.log(this.rating);
        this.starWidth = this.rating * 86/5;
    }
    
    //Le mandamos el payload del evento al contenedor
    onClick():void {
        console.log('Click');
        this.ratingClicked.emit(` The rating ${this.rating} was clicked!`);  
    }
}