import { Component, OnInit } from '@angular/core';
import { PosService } from './pos.service';

@Component({
    selector: 'app-pos',
    templateUrl: './pos.component.html',
    styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
    orders$!: any;

    constructor(private service: PosService) { }

    ngOnInit(): void {
        this.getOrders();
    }

    getOrders() {
        this.orders$ = this.service.getOrders().pipe();
    }

}
