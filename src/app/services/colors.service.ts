import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ColorResponse, ColorsResponse} from '../model/color.model';
import { Endpoint } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http:HttpClient) { }
  getColors():Observable<ColorsResponse>{
    return this.http.get<ColorsResponse>(Endpoint.colors);
  }
  getSingleColor(id:number):Observable<ColorResponse>{
    return this.http.get<ColorResponse>(`${Endpoint.colors}/${id}`);
  }
}
