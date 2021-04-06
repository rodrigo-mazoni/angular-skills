import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() card;

    constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
    }

    ngOnInit() {
    }

    onLike(card: any) {
        card.likes++
        this.spinner.show()
        this.http.put(`api/skills/${card.id}`, card).subscribe(data => {
            this.spinner.hide();
        })
    }

}
