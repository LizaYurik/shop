import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  
  constructor(private http: HttpClient) {
   
    //   this.getJSON().subscribe(data => {
      
  // });
}

// public getJSON(): Observable<any> {
//   // const food = (<any>data).name;
//   // console.log(food)
//     return this.http.get("http://localhost:4200/assets/food_restaurant.json")
    
//   } 

  //  getJson(){
  //   return this.http.get('http://localhost:4200/assets/result.json')
    
  //  }
}




