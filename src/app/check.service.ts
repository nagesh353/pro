import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  name:any

  constructor(private http:HttpClient) { }
  postdata(signin:any)
  {
    console.log(signin);
   return this.http.post("http://localhost:6200/add",signin)
    console.log(signin)
  }
  login(data:any)
  {
    return this.http.post("http://localhost:6200/login",data)
  }
  getdata()
  {
    return this.http.get("http://localhost:6200/details")
  }
  getmessages(token:any,data:any)
  {

   /* const headers= new HttpHeaders({ 
      "Content-Type" : "application/json",
      'Authorization': `Bearer ${token}` 
    })
     let body=
      {
       headers:headers,
      }
      console.log("service file is working")
      console.log('body',body);*/
    return this.http.post("http://localhost:6200/message",{message:data});
    // return this.http.get("http://localhost:6200/details")
  }
  displaymessages()
  {
    return this.http.get("http://localhost:6200/chat")
  }
   getname(data:any)
   {
     this.name=data
     console.log(this.name)

   }
}
