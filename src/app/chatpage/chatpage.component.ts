import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  public send : any
 public messeges : any=[]
 data:any;
 show: any;
 me:boolean=false; 
 message : any
 name:any
 del:any=false;
  constructor(private  che:CheckService) { 
    
  }

  ngOnInit(): void {
   this.showmessages()
  }
  showmessages()
  {
    this.name=this.che.name

    this.che.displaymessages().subscribe(res=>
      {
        this.data=res;
        this.show=this.data.data;
        console.log(this.show)
        

      })

  }
  text(){
    this.send = this.message
    this.che.getmessages(localStorage.getItem('token'),this.send).subscribe(res=>{
      console.log(res);
    })
    console.log(this.send)
    
    this.showmessages()
    //this.data.push(this.message) 
    this.message = " "
  
  }
  delete()
  {
    this.del=true;
  }

  
}
