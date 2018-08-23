import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})



export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number; // this value is calculated based on the ratings

    ngOnChanges(): void {
        this.starWidth = this.rating*75/5 // this method converts the rating number 
        // into a starWidth based on the width of the stars
    }
}