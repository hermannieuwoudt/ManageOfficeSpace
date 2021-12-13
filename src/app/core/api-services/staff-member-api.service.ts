import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  docData,
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { StaffMember } from 'src/app/models/staff-member';

@Injectable({
  providedIn: 'root',
})
export class StaffMemberApiService {
  constructor(private firestore: Firestore) {}

  index(): Observable<StaffMember[]> {
    const staffMembersRef = collection(this.firestore, 'staffMembers');
    return collectionData(staffMembersRef, { idField: 'id' }) as Observable<
      StaffMember[]
    >;
  }

  create(staffMember: StaffMember) {
    const staffMembersRef = collection(this.firestore, 'staffMembers');
    return addDoc(staffMembersRef, staffMember);
  }

  show(id: string): Observable<StaffMember> {
    const staffMemberRef = doc(this.firestore, `staffMembers/${id}`);
    return docData(staffMemberRef, {
      idField: 'id',
    }) as Observable<StaffMember>;
  }

  update(staffMember: StaffMember) {
    const staffMemberRef = doc(
      this.firestore,
      `staffMembers/${staffMember.id}`
    );
    return updateDoc(staffMemberRef, { ...staffMember });
  }

  destroy(id: string) {
    const staffMemberRef = doc(this.firestore, `staffMembers/${id}`);
    return deleteDoc(staffMemberRef);
  }
}
