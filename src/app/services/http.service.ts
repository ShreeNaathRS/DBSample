import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BASE_URL:string="https://dbsamplenode.herokuapp.com/api";
  constructor(private httpClient:HttpClient) { }

  postHttp(payload, header){
    return this.httpClient.post(`${this.BASE_URL}/create`,payload,header);
  }

}
