import { Component, OnInit } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { item } from '../item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriaModule } from '../../Material.Module';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,MateriaModule,NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private service: AppServeService,private route: Router){}
  toFind=localStorage.getItem('itemtofind');
  ngOnInit(): void {
    this.toFind=localStorage.getItem('itemtofind')
   if(this.toFind == null || this.toFind=="all") this.getAllItems();
   else{
    this.service.searchBar(this.toFind).subscribe((data)=>{
      this.allItems=data;
    })
   }
  }
  itemname=""
  itemcategory=""
  itemdescription=""
  
  showItemDetails=false;
  
  allItems:item[]=[];
  getAllItems(){
    this.service.getAllItems().subscribe((data)=>{
      this.allItems = data
       console.log(this.allItems)
    }
     )
  }



  getReview(data:any){
    this.service.setItemData(data);
    
    this.route.navigateByUrl('maindashboard/reviews')
    
  }

  dataToAddItem={
    "itemname":this.itemname,
    "itemcategory":this.itemcategory,
    "itemdiscription":this.itemdescription,
    "fk_userid":localStorage.getItem('userid')
  }
  // dataToShowForLocalStorage=localStorage.getItem('userid')
  chkDataEntered=false;
  dataNotFound=""
  addItem(){
    this.dataToAddItem={
      "itemname":this.itemname,
      "itemcategory":this.itemcategory,
      "itemdiscription":this.itemdescription,
      "fk_userid":localStorage.getItem('userid')
    }
    if(this.dataToAddItem.itemname=="" || this.dataToAddItem.itemcategory=="" || this.dataToAddItem.itemdiscription==""){
      this.dataNotFound="Incomplete fields try adding all and, Try again..";
      this.chkDataEntered=true;
      return;
    }
    
    console.log(this.dataToAddItem);
    
    this.service.addItem(this.dataToAddItem).subscribe((data) =>{
      console.log(data);
      this.getAllItems();
    })
    
    this.showItemDetails= !this.showItemDetails;
  }

  showItem(){
    this.showItemDetails = !this.showItemDetails;
    this.chkDataEntered=false;
  }

}
