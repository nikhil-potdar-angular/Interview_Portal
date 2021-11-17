import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {
  result:any;
  result1:any;
  constructor(private http : HttpClient) { }
  
 getData(){
    return this.http.get(" http://interviewapi.stgbuild.com/getQuizData");
  }
 
setResult(data:any,data1:any){
  this.result=data;
  this.result1=data1;

}
getResult(){
  return this.result;
}
getResult1(){
  return this.result1
}
}