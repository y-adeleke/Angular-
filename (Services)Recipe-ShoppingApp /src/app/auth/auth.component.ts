import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}
  isLoggedIn = true;
  isLoading = false;
  error: string | any = null;

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  onSubmit(authform: NgForm) {
    if (!authform.valid) {
      return;
    }
    const email = authform.value.email;
    const password = authform.value.password;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoggedIn) {
      this.isLoading = true;
      authObs = this.authService.signIn(email, password);
    } else {
      this.isLoading = true;
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;
        this.error = null;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    authform.reset();
  }
}
