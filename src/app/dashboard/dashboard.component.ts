import { Component, OnInit } from '@angular/core';
import { DefaultTitleStrategy, Router } from '@angular/router';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any
  message:any;
  m:any


  constructor(private che:CheckService,private route:Router) { }

  ngOnInit(): void {
    this.details()

  }
  details()
  {
    this.che.getdata().subscribe(res=>
      {
        this.data=res;
        this.message=this.data.data
        console.log(this.message)


      })
  
  }
  goback()
  {
    localStorage.removeItem('token')
    this.route.navigate([''])
  }
  page(data:any)
  {
    this.che.getname(data.name)

    this.route.navigate(['/chatapp'])
  }
}
