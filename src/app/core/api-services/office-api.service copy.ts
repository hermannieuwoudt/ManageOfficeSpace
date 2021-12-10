import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Office } from 'src/app/models/office';


@Injectable({
  providedIn: 'root',
})
export class OfficeApiService {
  constructor(private http: HttpClient) {}

  index(): Observable<Office[]> {
    return this.http.get<Office[]>(`v1/office`);
  }

  create(office: Office): Observable<Office> {
    return this.http.post<Office>(`v1/office`, {
      office,
    });
  }

  show(id: number): Observable<Office> {
    return this.http.get<Office>(`v1/office/${id}`);
  }

  update(office: Office): Observable<Office> {
    return this.http.put<Office>(`v1/office/${office.id}`, {
      office,
    });
  }

  destroy(id: number): Observable<any> {
    return this.http.delete(`v1/office/${id}`);
  }
}
