import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MateriaModule } from '../../Material.Module';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MateriaModule,RouterOutlet,FooterComponent,CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router){}

  searchData=""
  logout(){
    this.router.navigateByUrl('login');
    localStorage.clear();
  }

  goToHomePage(){
    this.router.navigateByUrl('maindashboard');
  }

  search(){
    console.log(this.searchData);
    
    localStorage.setItem('itemtofind',this.searchData);

    this.router.navigateByUrl('maindashboard');
    location.reload();
  }
  getAllCategories(){
    localStorage.setItem('itemtofind',"all");

    

    location.reload();
    this.router.navigateByUrl('maindashboard');
  }

  aboutUs(){
    this.router.navigateByUrl('maindashboard/about');
  }



}
