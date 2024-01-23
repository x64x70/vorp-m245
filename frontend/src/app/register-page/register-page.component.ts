import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  username: string = '';
  passwordConfirm: string = '';

  constructor(private api: ApiService, private router: Router) { }

  register(): void {
    if (this.firstName && this.lastName && this.email && this.password && this.username && this.passwordConfirm && (this.password === this.passwordConfirm)) {
      this.api.register(this.firstName, this.lastName, this.username, this.email, this.password, this.router)
    }
  }

}
