import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  eliyaz: any = "password";
  Name:string=""
  name:boolean=false;
  number:any;
  n:boolean=false;
  password:String=""
  p:boolean=false;
  cre:any;
  c:boolean=false;
  E:boolean=false;
  Email:string="";
  message:any;
  mess:any;
  pat:any
  constructor(private che:CheckService,private route:Router) { }

  ngOnInit(): void {
  }
  check(data:any)
  {
    if(data.target.checked)
    {
      this.eliyaz="text"
      return;
    }
    else{
      this.eliyaz="password"
    }
  }

  submit()
  {
    console.log("hello")
 if(this.Name.length<5)
  {
    this.c=true
  }
  let reg=/[a-zA-Z0-9][a-za-z0-9.]*@gmail[.]com/
  let pattern="[6-9][0-9]{9}"

  if(this.Email.match(reg))
  {
    this.E = false 
  }
  else{
    this.E=true

  }
  if(this.password.length<7)
  {
    this.p=true;
  }
  if(this.Name.length>5 && this.password.length>7 &&!this.E && this.number.match(pattern))
  {
    let body={
      name:this.Name,
      email:this.Email,
      mobileno:this.number,
      password:this.password

    }
    this.che.postdata(body).subscribe(res=>{
      console.log(body)
      
        this.message=res
        this.mess=this.message.data
        if(this.mess=="user added succesfully")
        {
             this.route.navigate([''])
        }

           },err=>
      {
        this.message=err;
        this.mess=this.message.data
      }
 
      );
    console.log(body)
  }

}

}
