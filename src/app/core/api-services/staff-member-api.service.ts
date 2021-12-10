import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffMember } from 'src/app/models/staff-memeber';

@Injectable({
  providedIn: 'root',
})
export class StaffMemberApiService {
  constructor(private http: HttpClient) {}

  index(): Observable<StaffMember[]> {
    return this.http.get<StaffMember[]>(`v1/staff_member`);
  }

  create(staffMember: StaffMember): Observable<StaffMember> {
    return this.http.post<StaffMember>(`v1/staff_member`, {
      staffMember,
    });
  }

  show(id: number): Observable<StaffMember> {
    return this.http.get<StaffMember>(`v1/staff_member/${id}`);
  }

  update(staffMember: StaffMember): Observable<StaffMember> {
    return this.http.put<StaffMember>(`v1/staff_member/${staffMember.id}`, {
      staffMember,
    });
  }

  destroy(id: number): Observable<any> {
    return this.http.delete(`v1/staff_member/${id}`);
  }
}
