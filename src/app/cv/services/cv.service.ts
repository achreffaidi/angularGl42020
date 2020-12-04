import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Personne } from '../model/personne';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  baseUrl = 'https://immense-citadel-91115.herokuapp.com/api/'
  selectPersonneSubject = new Subject<Personne>();
  personnes: Personne[] = [];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
      new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '', 123456, 38),
      new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '                 ', 123456, 38),
    ];
  }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this.baseUrl}personnes`);
  }

  postPersonne(p: Personne): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}personnes`,
      {
        name: p.name,
        firstname: p.firstname,
        cin: p.cin,
        job: p.job,
        path: p.path,
        age: p.age
    });
  }

  deletePersonne(p: Personne): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}personnes/` + p.id.toString());
  }

  getPersonne(id: string): Observable<Personne> {
    return this.http.get<Personne>(`${this.baseUrl}personnes/` + id);
  }

  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }
}
