import { Component, OnInit } from '@angular/core';
import { PosService } from '../pos.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pos-create',
    templateUrl: './pos-create.component.html',
    styleUrls: ['./pos-create.component.scss']
})
export class PosCreateComponent implements OnInit {
    searchProduct: string = '';
    products$!: any;
    carts: any[] = [];
    totalAmount: number = 0;

    constructor(private service: PosService, private router: Router) { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(q: string = '') {
        console.log(this.searchProduct);
        this.products$ = this.service.getProducts(q).pipe();
    }

    addCart(product: any) {
        const dupProduct = this.carts.find((cart) => product.id === cart.id);

        if (dupProduct) {
            dupProduct.qty++;
            dupProduct.price += product.price;
        } else {
            this.carts = [...this.carts, {
                ...product,
                qty: 1
            }];
        }

        this.totalAmount = this.carts.reduce((total, cart) => {
            return total + cart.price;
        }, 0);
    }

    async confirmOrder() {
        const orderId = (Math.random() + 1).toString(36).substring(7);

        const created = await this.service.createOrder({
            id: orderId,
            qty: this.carts.reduce((total, cart) => total + cart.qty, 0),
            price: this.carts.reduce((total, cart) => total + cart.price, 0),
            created: moment().format('YYYY-MM-DD HH:mm')
        }).subscribe({
            next: (result) => {
                console.log(result);
            }
        });
    }

}
