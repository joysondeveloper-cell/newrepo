import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root',
})
export class Common {
constructor(private http:HttpClient){}

getCommonService(){

  debugger;
  return this.http.get(
      // 'https://jsonplaceholder.typicode.com/users'
      'https://jsonplaceholder.typicode.com/invalid-url'
    );
}


}
