import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 url:any='https://dummy.restapiexample.com/'
  constructor(private http:HttpClient) {
   
   }
   getEmployeeList(){
     return this.http.get(this.url + 'api/v1/employees')
      
  }
  getProductData(){
    return this.http
      .get<Response>("assets/json/product.json")
      .pipe((response:any) => response);
  }
}
