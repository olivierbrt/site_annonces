import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'account', { responseType: 'text' });
  }

  updateUser(mail: string, username : string, nom : string, prenom: string): Observable<any> {
    return this.http.put(API_URL + 'account', {
      mail,
      username,
      nom,
      prenom
    }, httpOptions);
  }
}