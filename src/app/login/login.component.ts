import { visitAll } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckService } from '../check.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("un") d:any
  @ViewChild("check")c:any
  @ViewChild("pas")P:any
  password:String="";
  Test:String="";
  Email:String=""
  Name:String=""
  hi:boolean=false;
  pass:boolean=false;
  b:boolean=false
  val: any = "password";
  result:any;
  out:any
  
  constructor(private che:CheckService, private route:Router) { }
  re:any;
  
  ngOnInit(): void {
    }

  check(data:any)
  {
    if(data.target.checked) {
      this.val = "text";
      return;
    }
    else{
    this.val = "password";
    }
  }
  nag()
  {
    console.log("hello")
  }
  log()
  {
  let body={
    name:this.Name,
    pass:this.password
} 
//console.log(body)
this.che.login(body).subscribe(res=>
  {
    this.result=res; 
    this.out=this.result.data

    localStorage.setItem("token" , this.result.token)
    if(this.result.data=="user login succesfully")
    {
      this.route.navigate(['login'])

    }

  })
}
}