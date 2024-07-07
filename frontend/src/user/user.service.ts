import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from './constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  createuser(user: any): Observable<any> {
    return this.http.post<any>(`${Url}/user/add`, user);
  }

  getAll(): Observable<any> {
    return this.http.get(`${Url}/user/getuser`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${Url}/user/byId/` + id);
  }

  updateUser(id: number,user: any): Observable<any> {
    return this.http.put(`${Url}/user/update/` +id, user);
  }


  delete(id: number): Observable<any> {
    return this.http.delete(`${Url}/user/delete/` + id);
  }



}
