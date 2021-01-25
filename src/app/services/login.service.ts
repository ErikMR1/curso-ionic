import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from 'src/environments/endpoints';
import { LoginRequest, LoginResponse } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}
  login(data:LoginRequest):Observable<LoginResponse>{
   return this.http.post<LoginResponse>(Endpoint.login, data);
  }
}
