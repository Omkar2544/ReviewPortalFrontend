import { Component } from '@angular/core';
import { MateriaModule } from '../../Material.Module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from "@angular/material/core";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AppServeService } from '../app-serve.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private service: AppServeService) { }
  loginPageVisible: boolean = true;
  hide: boolean = true;
  username: string = "";
  password: string = '';
  viewWrongPassword = false;

  userId: string = "userid";
  userName: string = "username";
  itemToFind: string = "itemtofind";

  loginDataToSend = {
    "username": this.username,
    "password": this.password
  }

  login() {

    this.loginDataToSend = {
      "username": this.username,
      "password": this.password
    }

    this.service.checkUser(this.loginDataToSend).subscribe((data) => {
      if (data == true) this.router.navigateByUrl('maindashboard')
      else this.viewWrongPassword = true;
    })

    this.service.getUser(this.username).subscribe((data) => {
      localStorage.setItem(this.userId, data.userid);
      localStorage.setItem(this.userName, data.username);
      localStorage.setItem(this.itemToFind,"all");
    })

  }

  signupRoute() {

    this.router.navigateByUrl('signup');

  }

  


}
