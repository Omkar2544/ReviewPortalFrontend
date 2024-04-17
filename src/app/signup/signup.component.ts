import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AppServeService } from '../app-serve.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private router: Router,private service:AppServeService){}
  username: string='';
  email: string='';
  password: string='';
  hide: boolean = true;
  signupPageVisible: boolean=true;

  userId: string = "userid";
  userName: string = "username";
  itemToFind: string = "itemtofind";

  addUserDataToSend={
    "username":this.username,
    "email":this.email,
    "password":this.password
  }
  signup(): void {
    
   this.addUserDataToSend={
    "username":this.username,
    "email":this.email,
    "password":this.password
  }
   this.service.addUser(this.addUserDataToSend).subscribe((data) =>{

    this.service.getUser(this.username).subscribe((data) => {
      localStorage.setItem(this.userId, data.userid);
      localStorage.setItem(this.userName, data.username);
      localStorage.setItem(this.itemToFind,"all");
    })


    if(data) this.router.navigateByUrl('maindashboard')
   })
    
  }

navigateSignup(){
  this.router.navigateByUrl('login');
}




}
