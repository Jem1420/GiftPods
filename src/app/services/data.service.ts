import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface province{
  id: number;
  province: string;
  city: number;
  street: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url = '/assets/data/pro.json'
  items = [];
  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log("Data in Json =",data)
    })
   }
  
  
  // getProvinceData(){
  //   return this.http.get("/assets/data/pro.json");
  // }

  // getCitiesData(){
  //   return this.http.get("/assets/data/cities.json")
  // }
}
