import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  data: any = []
  index = 0;
  id: any = 0;
  id1: any = 0;
  id2: any = [];
  a: any;
  len: any;
  finalLen: any
  obj: Object = 0;
  arrLength: any
  currentArr: any = []
  correctCount: any = 0;
  wrongCount: any = 0;
  userInput: any = []
  radioOption: any = false
  checkboxOption: any = false
  previous: any = false
  options: any = []
  isChecked: boolean = false
  lessons: any;
  
  // checkedForm: boolean = true
  constructor(private fb: FormBuilder, private router: Router, private testService: TestService) { }

  fullForm = this.fb.group({
    lessons: this.fb.array([])
  });

  onChange(name: number, isChecked: boolean) {
    this.data.tests[this.id].questions[this.index].options[this.index].isChecked = true

  }

  Previous() {
    this.previous = true
    this.index--;
    console.log(this.data.tests[this.id].questions[this.index])
    console.log("userinput" + (this.userInput));
    localStorage.setItem("userInput", JSON.stringify(this.userInput))
    // this.userInput=localStorage.getItem('userInput');
    this.id2 = localStorage.getItem('arr2');
    this.id2 =JSON.parse(this.id2)
    console.log(this.index);
    console.log("preid :" + this.userInput[this.index]);
    // this.userInput[this.index].checked=true

  }
  next() {

    localStorage.setItem("arr2", JSON.stringify(this.id2))
    this.currentArr = localStorage.getItem('arr2')
    this.id2 = JSON.parse(this.currentArr)
    // console.log(this.data.tests[this.id].questions[this.index].correctOptionIndex)
    this.id1 = localStorage.getItem('arr1');
    this.id1 = JSON.parse(this.id1)


    console.log("type" + typeof (this.id1), typeof (this.id2))
    if (this.radioOption) {
      this.options[this.index] = this.id1
      // this.options[this.index].no = this.id1
      // this.options[this.index].checked = true
      this.userInput[this.index] = this.options[this.index]
      console.log("options" + this.options)
      localStorage.setItem("userInput", JSON.stringify(this.options))
      // this.options=JSON.parse(this.options)
      this.radioOption = false
    }
    // if(this.previous){
    //   this.Previous()
    // }
    if (this.data.tests[this.id].questions[this.index].correctOptionIndex == this.id1) {
      this.correctCount++;
      console.log("correct" + this.correctCount);
      this.testService.setResult(this.correctCount, this.arrLength);
    } else {
      this.testService.setResult(this.correctCount, this.arrLength);
      localStorage.setItem("arr2", JSON.stringify(this.id2))
    }
    if (this.checkboxOption) {
      this.id2 = localStorage.getItem('arr2')
      this.id2 = JSON.parse(this.id2)
      console.log("id2" + this.id2)
      this.options[this.index] = this.id2
      console.log("idd2" + this.options)
      this.userInput[this.index] = this.options[this.index]
      localStorage.setItem("userInput", JSON.stringify(this.options))
      this.options = localStorage.getItem('userInput')
      this.options = JSON.parse(this.options);
      this.checkboxOption = false
    }
    this.arrLength = this.data.tests[this.id].questions.length
    console.log("index :" + (this.data.tests[this.id].questions[this.index].correctOptionIndex))
    console.log("id2Arr:" + (this.id2));
    // this.id2.sort();
    if (JSON.stringify(this.id2) == JSON.stringify(this.data.tests[this.id].questions[this.index].correctOptionIndex)) {
      this.correctCount++;
      console.log("answer matched");
    }
    else {
      this.testService.setResult(this.correctCount, this.arrLength);
    }
    this.index++;
    // this.previous = false
  }


  finishTest() {
    // localStorage.setItem("arr",JSON.stringify(this.id))
    this.id = localStorage.getItem('arr');
    this.id1 = localStorage.getItem('arr1');
    this.id1 = JSON.parse(this.id1);

    localStorage.setItem("arr2", JSON.stringify(this.id2))
    this.id2 = localStorage.getItem('arr2');

    this.id2 = JSON.parse(this.id2);

    if (this.radioOption) {
      this.options[this.index] = this.id1

      // this.userInput[this.index] = this.options[this.index]
      console.log("options" + this.options)

      localStorage.setItem("userInput", JSON.stringify(this.options))
      this.radioOption = false
    }
    if (this.data.tests[this.id].questions[this.index].correctOptionIndex == this.id1) {
      ++this.correctCount;
      console.log("correct" + this.correctCount);
      this.testService.setResult(this.correctCount, this.arrLength);
    }

    if (this.checkboxOption) {
      this.options.push(this.id2)
      localStorage.setItem("userInput", JSON.stringify(this.options))
      this.checkboxOption = false
    }
    if (JSON.stringify(this.id2) == JSON.stringify(this.data.tests[this.id].questions[this.index].correctOptionIndex)) {
      ++this.correctCount;
      console.log("answer matched");
      console.log("correct" + this.correctCount);
      this.testService.setResult(this.correctCount, this.arrLength);
    }
    this.router.navigate(['finish']);
    this.index++;

  }

  counter(id1: any) {
    this.radioOption = true
    localStorage.setItem("arr1", JSON.stringify(id1))
    this.id1 = localStorage.getItem('arr1');
  }
  // localStorage.setItem("arr",JSON.stringify(id))
  // this.id=localStorage.getItem('arr');
  // this.index++;
  checkbox(a: number) {
    this.checkboxOption = true
    console.log("checkbox" + a);
    // console.log("id2Arr:" + (this.id2));

    this.id2.push(a);
    // this.id2 = a
    // localStorage.setItem("arr2", JSON.stringify(this.id2))
    // this.id2 = JSON.parse(this.id2);
    // this.id2 = localStorage.getItem('arr2');
    console.log("id2" + this.id2);

  }
  ngOnInit(): void {
    // this.index=0
    // this.checkedForm=true
    // localStorage.setItem("userInput", JSON.stringify(this.options))
    // this.options = JSON.parse(this.options);
    this.options[this.index] = this.id1
    this.id = localStorage.getItem('arr');
    // this.id2 = localStorage.getItem('arr2');
    // if(localStorage.getItem('userInput')==null){
    //  this.options=localStorage.getItem('userInput')
    //   }
    if (localStorage.getItem('arr2') != null) {
      this.id2 = localStorage.getItem('arr2');
      this.id2 =JSON.parse(this.id2)
      this.options[this.index] = this.id2
    //  this.options=localStorage.getItem('userInput')
    }
    if (localStorage.getItem('arr1') != null) {
      this.id1 = localStorage.getItem('arr1')
      this.options = localStorage.getItem('userInput');
      this.options = JSON.parse(this.options)
      this.options[this.index] = this.id1
    }
   
    this.testService.setResult(this.correctCount, this.arrLength);
    
    this.testService.getData().subscribe((data) => {
      this.data = data;
      console.log(data);
    console.log(this.data.tests[0].questions[0])
    
    });
  
    this.arrLength = this.data.tests[this.id].questions.length;
    console.log("lenght" + this.data.tests[this.id].questions.length)

    console.log("arrLength" + this.arrLength)
  }
}

