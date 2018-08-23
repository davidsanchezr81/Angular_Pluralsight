import { Component, OnChanges, Input, Output, EventEmitter} from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})



export class StarComponent implements OnChanges{
    @Input() rating: number; // this receive info from the Container
    starWidth: number; // this value is calculated based on the ratings
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    // the only way a nested component can pass info to the container is through an event
    // the generic argument in the EventEmitter (<string>) identifies the type of the event payload
    
    // When the user clicks on the stars, the star component receives that click event
    
   // in star.component.html (star component template) we use event binding to call the star component's 
   // onClick method. In this method we call the notify property and its emit method to
   // notify the event to the container
    

    // onClick(){
    //     this.notify.emit('clicked!');
    // }

    ngOnChanges(): void {
        this.starWidth = this.rating*75/5 // this method converts the rating number 
        // into a starWidth based on the width of the stars
    }

    onClick():void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
    }
}