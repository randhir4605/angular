import { Injectable } from '@angular/core';
import { Feature1Module } from './feature1.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get("http://localhost:3000/employee"); 
  }
}
