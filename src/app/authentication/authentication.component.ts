import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
    username!: string;
    message: string = '';

    constructor(private authServ: AuthenticationService, private router: Router) { }

    ngOnInit(): void {
    }

    login() {
        this.authServ.loggedIn(this.username).subscribe({
            next: (value) => {
                if (value.length) {
                    localStorage.setItem('loggedIn', JSON.stringify(value[0]));

                    this.router.navigateByUrl('/pos')
                } else {
                    this.message = 'Unautherize!!!';
                }
            }, 
            error: (error) => {
                console.log(error);
            }
        });
    }
}
