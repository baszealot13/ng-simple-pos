import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class PosService {
    apiHost = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getOrders() {
        return this.http.get(`${this.apiHost}/orders`)
    }

    getProducts(q: string = '') {
        let uri = `${this.apiHost}/products`;

        if (q) {
            uri += `?q=${q}`;
        }

        return this.http.get(uri);
    }

    createOrder(data: any) {
        return this.http.post(`${this.apiHost}/orders`, data, httpOptions);
    }
}
