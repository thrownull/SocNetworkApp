import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    registerMode = false;

    constructor(private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/members']);
        }
    }

    registerToggle() {
        this.registerMode = true;
    }

    cancelRegisterMode(registerMode: boolean) {
        this.registerMode = registerMode;
    }

    loggedIn() {
        return this.authService.loggedIn();
    }
}
