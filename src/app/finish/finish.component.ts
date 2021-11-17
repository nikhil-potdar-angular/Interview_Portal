import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  correctCount:any;
  // wrongCount:any;
  id:any;
  total:any
  data:any=[]

  constructor(private testService:TestService) { }
  
  
  ngOnInit(): void {
   this.correctCount=this.testService.getResult()
   this.total=this.testService.getResult1()
  //  this.id=localStorage.getItem('arr');
   this.testService.getData().subscribe((data) => {
   this.data = data;
    console.log("finishData"+data);
    // localStorage.removeItem("arr1");
    localStorage.clear();
  });
  //  this.total=this.data.tests[this.id].questions.length;
  // console.log("total"+this.total)
  }

}
