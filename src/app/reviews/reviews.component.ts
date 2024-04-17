import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServeService } from '../app-serve.service';
import { review } from '../review';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { reply } from '../reply';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule,NgbRatingModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  
  review=""
  rating=0
  reply=""
  recivedData: any;
  showReplies = false;
  showReviewContainer=false;
  showReplyContainer=false;
  dataToShow: review[] = []
  constructor(private route: ActivatedRoute, private service: AppServeService) { }

  dataToAddReview={
    "review":this.review,
    "rating":this.rating,
    "fk_itemid":"null",
    "fk_userid":localStorage.getItem('userid'),
    "fk_username":localStorage.getItem('username')
  }


  ngOnInit(): void {
    this.stateChange=false;
    this.recivedData = this.service.getItemData();
    console.log(this.recivedData.itemid);
    
    this.dataToAddReview={
      "review":this.review,
    "rating":this.rating,
    "fk_itemid":this.recivedData.itemid,
    "fk_userid":localStorage.getItem('userid'),
    "fk_username":localStorage.getItem('username')
    }
    this.getAllReviews();
   
    


  }

  getAllReviews(){

    this.service.getAllReviews(this.recivedData.itemid).subscribe((data) => {
      console.log(data);
      this.dataToShow = data;
    })
    
  }
  
 
  



  userReplies: reply[] = [];
  dataToGetReplies = {
    "reviewId": 25,
    "itemId": 22
  }
  getAllReplies(rid: any, itemid: any) {


    this.dataToGetReplies = {
      "reviewId": rid,
      "itemId": itemid
    }
    this.showReplies = true;
    console.log(this.dataToGetReplies);

    this.service.getAllReplies(this.dataToGetReplies).subscribe((data) => {
      this.userReplies = data;
    })

  }
  addReplyData={
    "username":localStorage.getItem('username'),
    "reply":"null",
    "fk_itemid":null,
    "fk_reviewid":null

  }
  addReply(data: any) {

    this.addReplyData={
      "username":localStorage.getItem('username'),
      "reply":data.reply,
      "fk_itemid":data.fk_itemid,
      "fk_reviewid":data.rid
  
    }
    this.showReplyContainer=!this.showReplyContainer;

  }

  addReplyToDb(){
    this.addReplyData.reply=this.reply;
    this.service.addReply(this.addReplyData).subscribe((data)=>{
      this.getAllReviews();
      this.showReplyContainer=!this.showReplyContainer;

    })
  }
  
  goToReply(){
    this.showReplyContainer=!this.showReplyContainer;
  }

   
  checkReviewData={
    "fk_itemid":"string",
    "fk_userid":localStorage.getItem('userid')
  }
  showUserAboutReview=""
  stateChange=false;
  addReview(){

    console.log(localStorage.getItem('userid'));
    
    this.dataToAddReview.review=this.review;
    this.dataToAddReview.rating=this.rating;
    this.checkReviewData.fk_itemid=this.dataToAddReview.fk_itemid;     
    this.checkReviewData.fk_userid=localStorage.getItem('userid');
    console.log(this.checkReviewData.fk_userid);
    

    this.service.checkReviewPresent(this.checkReviewData).subscribe((data)=>{
      console.log(data);
      
      if(data){
        this.service.addReview(this.dataToAddReview).subscribe((data)=>{
          this.getAllReviews();
        })
      }
      else{
        
        
          this.stateChange=!this.stateChange;
          this.showUserAboutReview="review already present you cannot add another one";
  
      }
    })
    
    

    this.showReviewContainer = !this.showReviewContainer;


  }

  goToReveiw(){
    this.showReviewContainer = !this.showReviewContainer;
  }



}
