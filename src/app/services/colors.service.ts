import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ColorResponse, ColorsResponse} from '../model/color.model';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http:HttpClient) { }
  getColors():Observable<ColorsResponse>{
    return this.http.get<ColorsResponse>(Endpoints.colors);
  }
  getSingleColor(id:number):Observable<ColorResponse>{
    return this.http.get<ColorResponse>(`${Endpoints.colors}/${id}`);

  }
}
