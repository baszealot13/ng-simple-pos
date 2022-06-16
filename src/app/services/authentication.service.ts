import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    loggedIn(username: string) {
        return this.http.get<{ id: number, name: string }[]>(`http://localhost:3000/profile?name=${username}`);
    }
}
