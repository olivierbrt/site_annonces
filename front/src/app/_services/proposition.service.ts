import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/propositions/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PropositionService {
  constructor(private http: HttpClient) { }

  getPropositions(): Observable<any> {
    return this.http.get(AUTH_API, httpOptions);
  }

  createProposition(date_pub: string, titre: string, description: string, prix: number): Observable<any> {
    return this.http.post(AUTH_API , {
      date_pub,
      titre,
      description,
      prix
    }, httpOptions);
  }

  deleteProposition(id:number): Observable<any> {
    return this.http.post(AUTH_API , {
      id
    }, httpOptions);
  }

  acceptProposition(id_ann: number, date_sale: string): Observable<any> {
    return this.http.post(AUTH_API , {
      id_ann,
      date_sale
    }, httpOptions);
  }
}
