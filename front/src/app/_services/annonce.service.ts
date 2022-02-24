import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/annonces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  constructor(private http: HttpClient) { }

  getAllAnnonces(): Observable<any> {
    return this.http.get(AUTH_API, httpOptions);
  }

  getMyAnnonces(): Observable<any> {
    return this.http.get(AUTH_API + '/myannonces', httpOptions);
  }

  getAnnoncesById(id: number): Observable<any> {
    return this.http.get(AUTH_API + '/id/'+id, httpOptions);
  }

  getUserAnnonces(username: string): Observable<any> {
    return this.http.get(AUTH_API + '/user/'+username, httpOptions);
  }

  createAnnonce(date_pub: string, titre: string, description: string, prix: number, photo: string): Observable<any> {
    return this.http.post(AUTH_API , {
      date_pub,
      titre,
      description,
      prix,
      photo
    }, httpOptions);
  }

  updateAnnonce(id_ann:number, titre: string, description: string, prix: string, photo: string): Observable<any> {
    return this.http.put(AUTH_API , {
      id_ann,
      titre,
      description,
      prix,
      photo
    }, httpOptions);
  }

  deleteAnnonce(id:string): Observable<any> {
    const options = {
      httpOptions,
      body:{
        id_ann: id
      }
    }
    return this.http.delete(AUTH_API , options);
  }
}
