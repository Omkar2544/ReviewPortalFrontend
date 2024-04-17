import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from './item';

@Injectable({
  providedIn: 'root'
})
export class AppServeService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  itemData:item={
    "itemid": 2,
    "fk_userid": 2,
    "itemname": "string",
    "itemcategory":"string",
    "itemdescription":"string",
    "creationtime":"string",
    "averageRating": 22,
    "image": "string"
  };
  setItemData(data:any){
    this.itemData=data;
  }
  getItemData(){
    return this.itemData;
  }




  private url1 = 'http://localhost:8080/getallitems';
  getAllItems() : Observable <any> {
    return this.http.get<any>(this.url1);
  }

  private url2 = 'http://localhost:8080/getallreviews/';
  getAllReviews(ur1:any) : Observable <any> {
    return this.http.get<any>(this.url2+ur1);
  }

  private url3 = 'http://localhost:8080/getallreplies';
  getAllReplies(dataToSend:any) : Observable <any> {
    return this.http.post<any>(this.url3,dataToSend);
  }

  private url4 = 'http://localhost:8080/addreply';
  addReply(dataToSend:any) : Observable <any> {
    return this.http.post<any>(this.url4,dataToSend);
  }

  private url5 = 'http://localhost:8080/login';
  checkUser(dataToSend:any) : Observable <any> {
    return this.http.post<any>(this.url5,dataToSend);
  }

  private url6 = 'http://localhost:8080/adduser';
  addUser(dataToSend:any) : Observable <any> {
    return this.http.post<any>(this.url6,dataToSend);
  }

  private url7 = 'http://localhost:8080/getuser/';
  getUser(dataToSend:any) : Observable <any> {
    return this.http.get<any>(this.url7+dataToSend);
  }

  private url8 = 'http://localhost:8080/additem';
  addItem(dataToSend:any) : Observable <any> {
    return this.http.post<any>(this.url8,dataToSend);
  }
  
  private url9 = 'http://localhost:8080/addreview';
  addReview(dataToSend:any) : Observable <any> {
    return this.http.post<any>(this.url9,dataToSend);
  }

  private url10 = 'http://localhost:8080/checkifreviewpresent';
  checkReviewPresent(dataToSend:any) : Observable <any> {
    return this.http.post<any>(this.url10,dataToSend);
  }

  private url11 = 'http://localhost:8080/searchbyitemcategory/';
  searchBar(dataToSend:any) : Observable <any> {
    return this.http.get<any>(this.url11+dataToSend);
  }

  private url12 = 'http://localhost:8080/searchbyitemname/';
  searchByCategory(dataToSend:any) : Observable <any> {
    return this.http.get<any>(this.url12+dataToSend);
  }


}
