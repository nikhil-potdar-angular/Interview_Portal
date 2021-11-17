import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   data:any=[]
  constructor(private router:Router,private testService:TestService) { }

  startTest(id:any){
    localStorage.setItem("arr",JSON.stringify(id))
    this.router.navigate(['start',id]);
  }

  ngOnInit(): void {
    localStorage.clear()
    this.testService.getData().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

}
